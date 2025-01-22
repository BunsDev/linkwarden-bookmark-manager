import LinkDetails from "@/components/LinkDetails";
import { useGetLink } from "@/hooks/store/links";
import { useRouter } from "next/router";
import { useEffect } from "react";
import getServerSideProps from "@/lib/client/getServerSideProps";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const getLink = useGetLink();

  useEffect(() => {
    getLink.mutate({ id: Number(id) });
  }, []);

  return (
    <div className="flex h-screen">
      {getLink.data ? (
        <LinkDetails
          activeLink={getLink.data}
          className="sm:w-[80vw] sm:h-[80vh] sm:m-auto w-screen"
          standalone
        />
      ) : (
        <div className="sm:max-w-3xl p-5 m-auto w-full flex flex-col items-center gap-5">
          <div className="w-20 h-20 skeleton rounded-xl"></div>
          <div className="w-full h-10 skeleton rounded-xl"></div>
          <div className="w-full h-10 skeleton rounded-xl"></div>
          <div className="w-full h-10 skeleton rounded-xl"></div>
          <div className="w-full h-10 skeleton rounded-xl"></div>
        </div>
      )}
    </div>
  );
};

export default Index;

export { getServerSideProps };
