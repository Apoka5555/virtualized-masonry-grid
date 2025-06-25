import { useEffect, useState, useCallback, useRef } from "react";
import { fetchPhotos } from "../api/pixels";
import { MasonryGrid } from "../components/MasonryGrid";
import type { Photo } from "../types/photo";
import { getHomePageState, setHomePageState } from "../store/homePageStore";

export const HomePage = () => {
  const saved = useRef(getHomePageState());

  const [photos, setPhotos] = useState<Photo[]>(saved.current.photos || []);
  const [page, setPage] = useState(saved.current.page || 2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const hasMounted = useRef(false);

  const loadMorePhotos = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    const newPhotos = await fetchPhotos(page);

    if (newPhotos.length === 0) {
      setHasMore(false);
    } else {
      setPhotos((prev) => [...prev, ...newPhotos]);
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  }, [hasMore, loading, page]);

  useEffect(() => {
    if (!hasMounted.current && !photos.length) {
      loadMorePhotos();
      hasMounted.current = true;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hasMore || loading || page <= 2) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePhotos();
        }
      },
      { rootMargin: "100px" }
    );

    const currentRef = observerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [loadMorePhotos, hasMore, loading, page]);

  useEffect(() => {
    return () => {
      setHomePageState(photos, page);
    };
  }, [photos, page]);

  return (
    <>
      <MasonryGrid photos={photos} />
      <div ref={observerRef} style={{ height: "1px" }} />
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
    </>
  );
};
