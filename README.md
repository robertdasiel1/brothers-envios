# Brothers Envios

Sitio web estatico para Brothers Envios.

## Estructura

- `index.html`
- `styles.css`

## Ejecutar local

Abre `index.html` en el navegador o usa un servidor local.

## Publicar en GitHub

1. Inicia sesion en GitHub CLI:
   ```powershell
   gh auth login
   ```
2. Crea repo y publica (desde esta carpeta):
   ```powershell
   git init
   git add .
   git commit -m "Initial website"
   gh repo create brothers-envios --public --source . --remote origin --push
   ```

## Publicar en Cloudflare Pages (con GitHub)

1. Entra a Cloudflare Dashboard.
2. Ve a `Workers & Pages` > `Create application` > `Pages` > `Connect to Git`.
3. Selecciona tu repo `brothers-envios`.
4. Configura:
   - Framework preset: `None`
   - Build command: (vacío)
   - Build output directory: `/`
5. Deploy.

## Opcion alternativa: deploy directo con Wrangler

1. Instala Wrangler:
   ```powershell
   npm install -g wrangler
   ```
2. Login en Cloudflare:
   ```powershell
   wrangler login
   ```
3. Deploy:
   ```powershell
   wrangler pages project create brothers-envios
   wrangler pages deploy . --project-name brothers-envios
   ```
