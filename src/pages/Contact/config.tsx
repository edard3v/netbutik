import Contact from "./Contact";

export const CONTACT = {
  id: crypto.randomUUID(),
  path: "contacto",
  to: "/contacto",
  display: "Contacto",
  element: <Contact />,
};
