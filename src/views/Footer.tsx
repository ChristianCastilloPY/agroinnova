export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="w-100">
        <a href="https://www.sispycom.com" target="_blank" rel="noreferrer">
          Portal de Agroinnova © - Un servicio enfocado en Agtech - {year}{" "}
        </a>
      </div>
    </footer>
  );
}
