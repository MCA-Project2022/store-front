import Link from "next/link";

import Container from "@/components/ui/container";
import GlobalNav from "./global-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import getStoreInfo from "@/actions/get-store-info";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  const store = await getStoreInfo();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">{store.name}</p>
          </Link>
          <GlobalNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
