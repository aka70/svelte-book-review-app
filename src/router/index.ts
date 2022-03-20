import DetailsBook from "../pages/DetailsBook.svelte";
import SearchBook from "../pages/SearchBook.svelte";

export const routes = {
	"/": SearchBook,
	"/books/:id": DetailsBook,
};
