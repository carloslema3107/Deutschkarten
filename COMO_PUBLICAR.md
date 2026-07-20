# DeutschKarten — guía de publicación y uso

## 1. Publicar por primera vez (GitHub Pages)

1. Crea una cuenta gratis en [github.com](https://github.com) si no tienes.
2. Crea un repositorio público, ej. `deutschkarten`.
3. Sube estos archivos a la raíz: `index.html`, `manifest.json`, `service-worker.js`, `cards-data.js`, `icon-192.png`, `icon-512.png`.
4. Commit.
5. **Settings → Pages** → Branch `main`, carpeta `/ (root)` → Guardar.
6. En un par de minutos: `https://TU-USUARIO.github.io/deutschkarten/`

## 2. Instalar en tu iPhone

1. Abre la URL en **Safari** (no Chrome).
2. Compartir → **"Añadir a pantalla de inicio"**.

## 3. Añadir vocabulario nuevo cada semana (ya NO hace falta GitHub)

Esto es lo que cambia respecto a antes: ahora puedes importar tarjetas nuevas **directamente desde la app**, sin volver a subir nada a GitHub.

- **Pestaña Mazos → botón "+"** (arriba a la derecha): importa un CSV con una columna `level` (o `nivel`) que indique el mazo de cada fila — pensado para tu exportación "📚 Todo".
- **Dentro de un mazo → "Importar tarjetas a este mazo"**: importa un CSV sin columna de nivel — todas las filas se asignan a ese mazo. Pensado para tus exportaciones por nivel (🟢 A1, 🟡 A2, 🔵 B1.1, 🩵 B1.2).

**El importador reconoce dos formatos de CSV automáticamente**, sin que tengas que indicar cuál es:
1. **Con encabezados** — columnas nombradas (`german`, `english`, `level`...), ver lista completa más abajo.
2. **Exportación estilo AlgoApp** — sin encabezados: columna 1 = palabra, columna 2 = traducción y gramática en HTML, columna 3 = etiquetas con emoji de nivel/tema/tipo. Es el mismo formato que ya usabas para importar en AlgoApp — la app lo detecta sola y extrae automáticamente traducción, regularidad verbal, participio, conjugaciones completas, plural, caso gramatical, tipo de conjunción, comparativo/superlativo y ejemplos, sin dejar restos de HTML. También limpia las notaciones especiales de ese export (verbos separables tipo `ab|fahren (trennb.)`, sustantivos solo-plural tipo `(pl.) Möbel`) para que no se dupliquen con aspecto distinto al ya existente.

La app detecta y omite duplicados automáticamente (comparando por palabra alemana dentro del mismo nivel, sensible a mayúsculas ya que en alemán importan — "essen" y "Essen" son palabras distintas), y quita artículos (`der`/`die`/`das`, incluido el caso especial `der/die`) del campo alemán si vienen incluidos, infiriendo el género si hace falta.

El importador con encabezados detecta automáticamente si el CSV usa comas, punto y coma o tabulaciones, y acepta variantes de nivel como `A1`, `a1`, `B1.1`, `B1-1` o `B11` indistintamente.

**Columnas de CSV reconocidas** (en español o inglés): `german`/`deutsch`, `english`/`ingles`, `wordType`/`tipo`, `topic`/`tema`, `gender`/`articulo`/`genero`, `plural`, `example`/`ejemplo`, `notes`/`notas`, `level`/`nivel`, y también los campos de verbos (`pp`, `auxiliaryVerb`, `separable`, `separablePrefix`, `presentConj`, `praeteritum`, `verbCase`, `regularity`) y de preposiciones/adjetivos (`prepCase`, `komparativ`, `superlativ`, `conjType`) — todos estos se muestran ya en la vista de Tarjetas (metadatos de la tarjeta y detalle al tocarla), no solo se guardan en silencio.

Solo tendrás que volver a subir archivos a GitHub si haces una reestructuración grande de datos ya existentes.

## 4. Qué está implementado ahora mismo

- **Tus 2613 tarjetas reales**: extraídas directamente de tu archivo `anki-german.jsx` del proyecto — A1 (891), A2 (835), B1.1 (451), B1.2 (436) — con género, ejemplos, notas, y conjugaciones completas donde ya las tenías rellenadas. Nada inventado; es tu vocabulario real.
- **Reverso de la tarjeta con toda la info, para cualquier tipo de palabra**: verbos (regularidad, verbo modal, separable, caso, participio + auxiliar, conjugaciones completas), sustantivos (plural), adjetivos (comparativo/superlativo), preposiciones (caso), conjunciones (coordinada/subordinada), y el registro de formalidad (informal/coloquial/formal) cuando está indicado — todo tal como en tu anki-german.jsx, no solo en los verbos. La tarjeta ahora es más alta y el reverso se desplaza si hace falta.
- **Indicador de regularidad verbal**: ✓ Regular / ⚠️ Irregular en cada verbo, igual que en tu app original.
- **Conjunción como tipo de palabra propio**: Konjunktion, con su emoji 🔀, para "und", "aber", "weil", etc.
- **Ajustes generales**: icono de engranaje en la pestaña Mazos → elige tema Claro, Oscuro, o Automático (según la hora: claro de 7:00 a 19:00, oscuro el resto del día). Se revisa cada 15 minutos y al volver a abrir la app, por si cambia la hora mientras la tienes abierta.
- **Tipo de letra**: en Ajustes generales, elige entre Serif (la de siempre), Redonda, Sans-serif o Monoespaciada para las palabras y títulos de toda la app.
- **Copia de seguridad**: en Ajustes generales → "Exportar copia de seguridad" abre el panel de compartir nativo de iPhone, con todo tu progreso, mazos, ajustes y capturas en un archivo — puedes enviarlo por Mail (a tu Gmail), guardarlo en Google Drive, iCloud, o donde prefieras. "Importar copia de seguridad" lo restaura (pide confirmación, ya que reemplaza todo lo actual). Guarda este archivo en algún sitio seguro de vez en cuando — es tu única red de seguridad si cambias de móvil o algo falla.
- **Accesos directos desde el icono de la app**: mantén pulsado el icono de DeutschKarten en la pantalla de inicio para ir directo a "Repasar" (OmniRepaso) o a "Capturar palabra", sin pasar por Mazos primero.
- **Tema automático según el sistema**: en Ajustes → Tema, además de "Automático (según la hora)" ahora hay "Automático (según el sistema)", que sigue el modo claro/oscuro general de tu iPhone y se actualiza al instante si lo cambias.
- **Calendario**: en Estadísticas, en vez del mapa de calor de antes, ahora es un calendario mensual como en AlgoApp — ⭐ en los días que cumpliste el objetivo diario, un tono más suave en los días que practicaste algo pero no llegaste, y sin color en los días sin repasar. Puedes cambiar de mes deslizando el dedo por el calendario o con las flechas de al lado del nombre del mes.
- **Calificar deslizando la tarjeta**: una vez volteada, desliza la tarjeta entera en vez de tocar un botón — derecha = Bien, izquierda = Otra vez, arriba = Fácil, abajo = Difícil. La tarjeta sigue tu dedo y vuela fuera de la pantalla al soltar si el gesto es suficientemente claro; si no, vuelve a su sitio sin calificar nada.
- **Estilo de respuesta "Pulgar"**: en Ajustes generales, alternativa al estilo de calificación de siempre ("Inferior") — un grupo de 4 botones circulares flotantes (Fácil/Bien/Difícil/Otra vez) que puedes arrastrar a la posición más cómoda para usar la app con una sola mano, con opacidad ajustable.
- **Voz**: en Ajustes generales, elige entre las voces alemanas disponibles en tu iPhone para la pronunciación (o deja la predeterminada). La pronunciación ahora también incluye el artículo (der/die/das).
- **Capturas rápidas**: icono de lápiz ✏️ siempre visible arriba, en cualquier pantalla — para apuntar una palabra que oigas por la calle en dos toques. Escribes la palabra (y opcionalmente una nota), y la app intenta traducirla automáticamente (usando un servicio gratuito, necesita conexión; si falla, simplemente guarda la palabra sin traducción). Cada captura tiene su botón de altavoz 🔊. Desde ahí puedes "Copiar todo" (para pegarlo en un chat con Claude) o "Descargar .txt", y luego pedirle a Claude que las añada con toda su info a tu `anki-german.jsx`. Las capturas no se borran solas — tú decides cuándo vaciarlas.
- **Pronunciación**: botón de altavoz 🔊 junto a la palabra alemana (en la tarjeta de estudio y en el detalle de Tarjetas) — usa la síntesis de voz del propio Safari, gratis y sin conexión.
- **Deshacer última calificación**: botón de deshacer en la cabecera del repaso, aparece justo después de calificar una tarjeta y revierte esa calificación (progreso, estadística e historial) para que puedas corregir un toque accidental.
- **Reiniciar progreso**: dentro de cualquier mazo → "Reiniciar progreso" borra todo el historial de repaso (vencimientos, dificultad, estabilidad) y deja las tarjetas como si nunca las hubieras estudiado — el mazo, las tarjetas y sus ajustes se conservan intactos, solo se borra el aprendizaje. Pide doble confirmación: primero un aviso, y luego tienes que escribir el nombre exacto del mazo para que se ejecute.
- **Eliminar mazos**: dentro de cualquier mazo → "Eliminar mazo" lo manda a la Papelera (accesible desde la pestaña Mazos, al final de la lista). Desde ahí puedes restaurarlo (con todo su progreso intacto) o eliminarlo para siempre. Si no haces nada, se borra automáticamente a los 30 días.
- **Mazos**: lista de A1/A2/B1.1/B1.2 y de cualquier mazo nuevo que crees, contador de pendientes/nuevas, importador CSV.
- **Mazos nuevos desde CSV**: si el CSV trae un nivel que no existe todavía, la app te pregunta cómo quieres llamar a ese mazo antes de importarlo. Puedes cambiarle el nombre luego con "Renombrar mazo" dentro del detalle del mazo.
- **Detalle de mazo**: histograma de vencimientos (Nvo/Ahora/<24h/Mañana/<1sem/Futuro) — toca cualquier barra para filtrar el repaso a solo esas tarjetas (incluso si están en "Futuro" y aún no tocaba repasarlas); toca la misma barra otra vez para quitar el filtro —, ajustes (etiquetas por tema y tipo de palabra con emoji, tarjetas por sesión, tamaño de fuente, temporizador de volteo automático, modo de repaso, retención FSRS, orientación de la tarjeta, estabilización al voltear).
- **Tarjetas**: navegador de tarjetas del mazo en vista lista o cuadrícula, con buscador por nombre (busca en alemán e inglés), filtro por tipo de palabra (Verb/Substantiv/Adjektiv... en alemán, no en español), filtro por estado (desde el histograma) y orden (alfabético, creación, último repaso). En cuadrícula, cada tarjeta muestra una insignia de color según su estado de vencimiento, el género en color (masculino azul, femenino rojo, neutro verde), y datos según el tipo de palabra (caso gramatical, participio, plural...) cuando el CSV los incluye. Al tocar una tarjeta se ve el detalle completo, incluidas las conjugaciones de presente y pretérito si el CSV las trae.
- **FSRS real**: se usa el algoritmo público de repetición espaciada FSRS (no una aproximación), con los pesos por defecto publicados por el proyecto open-spaced-repetition.
- **Estadísticas**: progreso diario (repasos de hoy, promedio, últimos 7/30 días con gráfico), ritmo de estudio (objetivo diario editable, racha, días activos, mejor día), biblioteca (mazos, tarjetas, nuevas, maduras), calidad de respuesta (tasa de aciertos, tiempo total y promedio, gráfico Falla/Difícil/Bien/Fácil), tarjetas pendientes (histograma agregando los 4 mazos).
- **OmniRepaso**: combina varios mazos en una sola sesión, con filtro de período (según cuándo se repasó cada mazo por última vez), selección de mazos, etiquetas, y los mismos ajustes que un mazo individual.

## 5. Una simplificación a tener en cuenta

Las "Etiquetas" de este mazo usan tu campo `topic` existente (uno por tarjeta), no un sistema de etiquetas múltiples como el de la app original. Si más adelante quieres etiquetas múltiples de verdad, dímelo y ajustamos el esquema de las 2600 tarjetas.

## 6. Diseño: Liquid Glass

La interfaz está adaptada al lenguaje visual "Liquid Glass" de Apple (iOS 26): la barra superior y la barra de pestañas ahora son cristal translúcido flotante con desenfoque real (`backdrop-filter`), el contenido se desliza por detrás en vez de quedar encajonado, los botones de icono son círculos de cristal, y la barra "Repasar" flota como una píldora de cristal claro sobre el papel de las tarjetas. Las tarjetas de repaso en sí (el "papel" de fichero) se mantienen sólidas y legibles a propósito — en la filosofía de Apple, el contenido se queda nítido y son los controles los que se convierten en cristal por encima.

Esto requiere Safari relativamente reciente (cualquier iPhone con iOS de los últimos años vale) para que el desenfoque se vea correctamente; en un navegador muy antiguo, el cristal se verá simplemente como un panel de color sólido, sin desenfoque, pero la app seguirá funcionando igual.

El modo oscuro ahora es un negro de verdad en toda la app (fondo casi negro, texto claro de alto contraste), no solo en la barra superior — antes solo se oscurecía el "cromado" y el contenido se quedaba siempre claro, lo cual no tenía mucho sentido como modo oscuro real.
