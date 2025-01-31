export async function GET(request) {
  try {
    const apiUri = "https://fakestoreapi.com/products";
    const data = await fetch(apiUri).then(async (data) => await data.json());
    return Response.json({ data }, { status: 200 });
  } catch (err) {
    console.log(err.message);
    return Response.json({message: err.message}, { status: 500 });
  }
}
