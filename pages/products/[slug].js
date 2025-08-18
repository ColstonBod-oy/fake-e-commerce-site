import ProductDetail from "../../components/ProductDetail";

const defaultEndpoint = "https://fakestoreapi.com/products";

export const getStaticPaths = async () => {
	const res = await fetch(defaultEndpoint);
	const data = await res.json();
	const paths = data.map((product) => {
		return {
			params: { slug: product.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.slug;
	const res = await fetch(`https://fakestoreapi.com/products/${id}`);
	const data = await res.json();

	return {
		props: {
			product: data,
		},
	};
};

export default function Details({ product }) {
	return <ProductDetail key={product.id} {...product} />;
}
