export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Imagem",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Nome",
      type: "string",
    },
    {
      name: "slug",
      type: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      Title: "Preço",
      type: "number",
    },
    {
      name: "details",
      title: "Detalhes",
      type: "string",
    },
  ],
};
