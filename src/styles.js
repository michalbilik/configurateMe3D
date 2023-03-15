const styles = {
  app: "w-screen h-screen select-none",

  configurator: "fixed right-4 bottom-1/4 w-96 p-6 flex flex-col gap-4",

  configurator__section__title: "uppercase font-bold font-poppins text-white",

  configurator__section__values:
    "flex flex-row gap-8 items-center flex-wrap py-4",

  item: "flex flex-col items-center transition-all duration-400 hover:opacity-90",

  item__dot: "w-8 h-8 rounded-full border-2 border-gray-300",

  "item--active .item__dot": "border-white",

  item__label:
    "text-center font-bold text-sm text-gray-600 capitalize hover:text-white",

  "item--active .item__label": "text-white",
};

export { styles };
