const fs = require('fs-extra');
const path = require('path');

// Directorio raíz del proyecto
const rootDir = path.join(__dirname, '..');
// Directorio de origen para archivos estáticos
const publicDir = path.join(rootDir, 'public');
// Directorio de destino (donde se generará el build)
const outDir = path.join(rootDir, 'out');

// Archivos específicos que queremos copiar desde public/
const publicFilesToCopy = [
  'robots.txt',
  'sitemap.xml',
  'googlecc37cdbf30c6dce0.html'
];

// Archivos de la raíz que deben copiarse al directorio de salida
const rootFilesToCopy = [
  '.htaccess',
  'contacto.php',
  'test-php.php'
];

console.log('Iniciando copia de archivos...');

// Función para copiar archivos con manejo de errores
const copyFiles = (files, srcBaseDir, destBaseDir) => {
  files.forEach(file => {
    const srcFile = path.join(srcBaseDir, file);
    const destFile = path.join(destBaseDir, file);
    
    try {
      if (fs.existsSync(srcFile)) {
        fs.copySync(srcFile, destFile, { overwrite: true });
        console.log(`✅ ${file} copiado correctamente a ${destBaseDir}`);
      } else {
        console.warn(`⚠️  No se encontró el archivo: ${file} en ${srcBaseDir}`);
      }
    } catch (error) {
      console.error(`❌ Error al copiar ${file}:`, error.message);
    }
  });
};

// 1. Copiar archivos estáticos de public/
console.log('\nCopiando archivos estáticos de public/...');
copyFiles(publicFilesToCopy, publicDir, outDir);

// 2. Copiar archivos de la raíz
console.log('\nCopiando archivos de la raíz...');
copyFiles(rootFilesToCopy, rootDir, outDir);

console.log('\n✅ Proceso de copia completado.');
