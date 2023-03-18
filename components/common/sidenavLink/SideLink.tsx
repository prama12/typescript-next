import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  icon: React.ReactNode;
  url: string;
  name: string;
};

const SideLink = ({ icon, url, name }: Props) => {
  const router = useRouter();
  return (
    <div className="w-full">
      <Link href={url}>
        <div
          className={
            router.pathname == url
              ? " bg-primary-blue px-4 py-3 rounded-lg flex items-center text-white gap-4"
              : "px-4 py-3 rounded-lg flex items-center text-primary-jet gap-4 hover:bg-primary-blue animation  hover:text-white "
          }
        >
          {icon}
          <p className="leading-[22.4px] capitalize tracking-[0.02em] font-urbanist ">
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SideLink;
