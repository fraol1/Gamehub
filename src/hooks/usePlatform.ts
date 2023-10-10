import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = (platform: Platform | null) =>
  useData<Platform>("/platforms/lists/parents");

export default usePlatform;
