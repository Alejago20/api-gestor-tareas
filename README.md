Gestor de Tareas - API
API REST desarrollada con Node.js, Express y MongoDB para gestionar tareas de forma sencilla.
Incluye endpoints para registro, login y gestión de tareas.

.Características
Registro y autenticación de usuarios.

Creación, lectura, actualización y eliminación de tareas.

Conexión segura a base de datos MongoDB Atlas.

Variables de entorno para credenciales sensibles.

Instalación
bash
Copiar
Editar
# Clonar el repositorio
git clone https://github.com/usuario/nombre-repo.git

# Entrar al directorio
cd nombre-repo

# Instalar dependencias
npm install
⚙️ Configuración
Crea un archivo .env en la raíz del proyecto.

Agrega tus variables de entorno:

env
Copiar
Editar
MONGODB_URI=tu_conexion_a_mongodb
PORT=4000
▶️ Uso
bash
Copiar
Editar
npm run dev
El servidor estará disponible en http://localhost:4000.

📌 Endpoints básicos
POST /register → Registrar usuario.

POST /login → Iniciar sesión.

