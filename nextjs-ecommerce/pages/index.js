import Head from "next/head";
import { Image, Flex } from "@chakra-ui/react";
import Product from "../components/Product";
import { Image as NextImage } from "next/image";
import { useCartContext } from "../context/cartContext";
import { useEffect } from "react";

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products?limit=10");
  const data = await res.json();
  return {
    props: { data },
  };
}

function Home({ data }) {
  const { setCart } = useCartContext();
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  return (
    <div>
      <Head>
        <title> Create Next App </title>{" "}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Image
          as={NextImage}
          mb={4}
          w="full"
          h={270}
          fit="cover"
          src="/hero.jpg"
        />
        <Flex direction="row" p={2} wrap="wrap">
          {/* {products.map((product, index) => {
            return <Product {...product} key={index} />;
          })} */}
          {data.map((product, index) => {
            return <Product {...product} key={index} />;
          })}
        </Flex>
      </>
    </div>
  );
}

export default Home;
