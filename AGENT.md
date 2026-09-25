# Agent Context & Rules: Sundemon Tattoo Studio Redesign

## Contexto del Proyecto
Web editorial de autor para "Sundemon Tattoo Studio" en Alcalá de Henares.
Estética: Minimalista, lujo discreto, arquitectura sólida, tonos cálidos/arena.

## Stack Tecnológico
- Framework: Next.js (App Router)
- Lenguaje: TypeScript (modo estricto)
- Estilos: Tailwind CSS
- Formularios: React Hook Form + Zod
- Backend/Emails: Next.js Server Actions + Resend
- Deploy: Vercel

## Reglas de Codificación
1. Componentes:
   - Usa React Server Components (RSC) por defecto.
   - Añade 'use client' solo si hay interactividad (formularios, modales, estado local).
   - Estructura las páginas en `app/` y la interfaz reutilizable en `components/ui/` y `components/sections/`.

2. ## Dirección visual y estilos

   - El proyecto debe mantener una estética cálida, artesanal, elegante y editorial, inspirada en la identidad visual actual de SUNDEMOM. La interfaz debe sentirse humana y cuidada, evitando el aspecto genérico de una plantilla SaaS.

### Paleta de colores

   - Usar tokens de Tailwind en lugar de colores arbitrarios repetidos:

   - `sand-100`: `#f4ede3`, fondo principal tipo papel.
   - `sand-200`: `#e9dac5`, superficies y variaciones del fondo.
   - `sand-300`: `#d9c0a1`, bordes y detalles suaves.
   - `earth-500`: `#8c5a3c`, acento principal.
   - `earth-700`: `#5f3b2a`, títulos, navegación activa y acciones primarias.
   - `copper-500`: `#b9784c`, acento secundario y estados de interacción.
   - `ink-900`: `#241a15`, texto principal.
   - `white-warm`: `#fffefc`, texto claro y superficies luminosas.

   La paleta debe ser cálida y terrosa. No utilizar morado, azul oscuro, neón o fondos completamente blancos como dirección visual principal.

### Tipografía

   - Usar `Manrope` para texto corrido, formularios, navegación y controles.
   - Usar `Prata` o `Cinzel` para titulares, nombres de marca y elementos editoriales.
   - Los titulares deben tener una jerarquía clara, interlineado compacto y una apariencia elegante.
   - No usar fuentes genéricas como Arial, Roboto o Inter si existe una alternativa definida en el proyecto.
   - Evitar el uso excesivo de mayúsculas y del espaciado artificial entre letras.

### Fondos y superficies

   - El fondo principal puede combinar `sand-100` y `sand-200` mediante gradientes suaves y discretos.
   - Se permiten efectos radiales muy sutiles para dar profundidad, sin convertirlos en el elemento dominante.
   - Las superficies deben utilizar fondos cálidos semitransparentes, por ejemplo `bg-white-warm/75`.
   - Usar bordes finos con baja opacidad y sombras suaves en tonos tierra.
   - No crear interfaces basadas en tarjetas apiladas dentro de otras tarjetas.
   - Las secciones principales deben sentirse amplias y despejadas; reservar las tarjetas para elementos repetidos, formularios o contenido que necesite agrupación.

### Bordes, radios y sombras

   - Usar radios moderados: `rounded-xl` para secciones y `rounded-lg` para componentes.
   - Usar `rounded-full` únicamente para botones tipo píldora, navegación activa o controles circulares.
   - Evitar esquinas excesivamente redondeadas en toda la interfaz.
   - Las sombras deben ser suaves, cálidas y poco profundas:
   `shadow-[0_12px_24px_rgb(95_59_42/0.10)]`.
   - Evitar sombras negras intensas y efectos glassmorphism exagerados.

### Botones y controles

   - Los botones primarios deben usar una combinación de `earth-700` y `copper-500`, con texto claro.
   - Los botones secundarios pueden usar fondo cálido semitransparente y borde `earth-700/30`.
   - Los botones principales deben ser tipo píldora, tener una altura mínima de `44px` y responder bien en móvil.
   - Todo control interactivo debe incluir estados `hover`, `focus-visible`, `active` y `disabled`.
   - El foco visible debe ser claro y accesible, usando un contorno cobre.
   - No crear botones de texto largos cuando un icono familiar sea suficiente.

### Layout y responsive

   - Diseñar siempre con enfoque mobile-first.
   - Usar contenedores con ancho limitado, por ejemplo `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`.
   - Mantener una composición editorial: mucho espacio respirable, bloques centrados y anchos de lectura de aproximadamente `60ch` a `70ch`.
   - Utilizar grids responsivos con `grid-cols-1`, `sm:grid-cols-2` y `lg:grid-cols-3`.
   - Las imágenes deben usar `object-cover`, proporciones estables y no provocar saltos de layout.
   - Los textos largos deben poder dividirse correctamente; nunca permitir desbordamientos horizontales.
   - Los elementos táctiles deben tener como mínimo `44px` de altura o superficie interactiva.

### Imágenes y multimedia

   - Las imágenes deben mostrar el trabajo real de SUNDEMOM y no utilizar recursos genéricos o imágenes puramente decorativas.
   - Usar esquinas suaves, composiciones limpias y proporciones consistentes.
   - Los vídeos pueden utilizar una superficie oscura cálida como contenedor.
   - Mantener controles multimedia accesibles y visibles sobre fondos con suficiente contraste.

### Motion

   - Usar animaciones breves y con propósito: aparición progresiva, elevación ligera al pasar el cursor y movimiento flotante muy sutil.
   - Preferir `transition-colors`, `transition-transform` y `duration-200` o `duration-300`.
   - Respetar `prefers-reduced-motion`.
   - No añadir animaciones constantes o llamativas que compitan con el contenido visual.

### Accesibilidad visual

   - Mantener contraste suficiente entre texto y fondo.
   - No depender únicamente del color para comunicar estados.
   - Añadir `focus-visible` a enlaces, botones, campos y elementos interactivos.
   - Mantener labels visibles en formularios.
   - Usar HTML semántico y textos alternativos descriptivos para imágenes.
   - Verificar la interfaz en móvil, escritorio y con zoom de texto.

### Reglas de implementación con Tailwind

   - Preferir las clases y tokens definidos por el proyecto.
   - No repetir colores hexadecimales directamente en los componentes.
   - Evitar grandes bloques de CSS personalizado cuando Tailwind pueda resolverlos claramente.
   - Usar `@apply` solo para patrones realmente repetidos.
   - Mantener los componentes visualmente simples y reutilizables.
   - Antes de añadir un nuevo color, radio, sombra o tamaño tipográfico, comprobar si ya existe un token equivalente..

3. Formularios & Server Actions:
   - Valida siempre los datos en cliente y servidor con esquemas Zod.
   - Procesa los envíos a través de Server Actions en `app/actions/`.

4. Rendimiento:
   - Usa siempre `<Image />` de `next/image` con dimensiones explícitas o `fill`.

### Reglas de implementación con github
   - Vamos a trabajar con conventional commits; después de cada cambio haremos un commit indicando qué se ha realizado.
   - Los commits serán atómicos: cada uno debe contener una única tarea o cambio funcional relacionado, sin mezclar cambios independientes.

### Reglas de implementación generales
   - vamos a tener una cobertura de test para las acciones que vayamos implementando, si podemos las haremos siempre en TDD