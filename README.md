# Portafolio de David Parra

Portafolio personal construido con **Next.js 16 (App Router) + TypeScript + Tailwind CSS 4**, desplegado en **Vercel**. Incluye soporte bilingüe ES/EN, sección de premios (WSA 2026), proyectos, habilidades y contacto.

## ▶️ Cómo descargar y ejecutar

1. **Descargar el código**
   ```bash
   git clone https://github.com/dphack1987/my-portafolio-con-vercel.git
   cd my-portafolio-con-vercel
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```
   Disponible en `http://localhost:3000`.

4. **Build de producción**
   ```bash
   npm run build
   npm start
   ```

## 🧹 Comandos de calidad

| Comando | Descripción |
| --- | --- |
| `npm run lint` | ESLint (config plana de Next.js 16) |
| `npm run typecheck` | Verificación de tipos con TypeScript |
| `npm run build` | Build de producción (valida tipos) |

## 🌟 Características

- 💼 Secciones de proyectos, habilidades y premios
- 🌐 Soporte bilingüe (Español/Inglés) con persistencia en `localStorage`
- 📱 Diseño responsive (desktop, laptop, tablet, móvil)
- 📨 Formulario de contacto que abre el cliente de correo con el mensaje precargado
- 🔗 Botón de compartir (Web Share API con copiado de URL como alternativa)
- 🔍 SEO: `metadata`, Open Graph, Twitter Card, `robots.txt` y `sitemap.xml`

## 💻 Tecnologías

- Next.js 16 (App Router, Turbopack, `output: standalone`)
- React 19 + TypeScript 5
- Tailwind CSS 4
- Componentes propios inspirados en shadcn/ui (`button`, `card`, `input`, `textarea`)

## 🚀 Despliegue

- **Vercel**: el repo está configurado con `output: standalone`; Vercel detecta Next.js automáticamente.
- **CI**: `.github/workflows/deploy.yml` ejecuta lint + typecheck + build en cada push/PR a `master`.

## 📫 Contacto

- 📧 Email: parraprietodavid87@gmail.com
- 🔗 GitHub: [@dphack1987](https://github.com/dphack1987)
- 📱 Teléfono: +57 302 604 7592

## 📄 Licencia

© 2026 David Parra. Todos los derechos reservados.
