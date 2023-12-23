import axios from "axios";

async function test() {
  try {
    const res = await axios.get("http://suitmedia-backend.suitdev.com/api/ideas?page%5Bsize%5D=10&append%5B0%5D=small_image&append%5B1%5D=medium_image&sort=published_at&page%5Bnumber%5D=28");
    const post = res.data.data;
    const link = res.data.links;
    const meta = res.data.meta;

    console.log(post);
    console.log(link);
    console.log(meta);
  } catch (error) {
    console.log(error);
  }
}

test();
