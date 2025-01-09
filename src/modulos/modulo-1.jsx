import {Esp}from "../components/espacio"
const Modulo1 = () => {
  return (
    <article id="modulo-1">
      <div className="h2-topBar">
        <h2> Introducción a SQL.</h2>
        <a href="#indice">al Indice</a>
      </div>
      <h3>Historia y Evolución de SQL</h3>
      <p>
        SQL, o Structured Query Language, es un lenguaje de programación
        diseñado para gestionar y manipular bases de datos relacionales. Su
        historia y evolución son fundamentales para comprender su posición en la
        tecnología moderna y su impacto en la gestión de datos.
      </p>
      <h4>Origen y Evolución Temprana:</h4>
      <p>
        SQL tiene sus raíces en el trabajo realizado por IBM en la década de
        1970. El proyecto System R de IBM, liderado por Edgar F. Codd,
        desarrolló los fundamentos de lo que se convertiría en SQL. Codd propuso
        el modelo relacional para las bases de datos en su influyente documento
        "A Relational Model of Data for Large Shared Data Banks", publicado en
        1970.
      </p>
      <p>
        En 1974, IBM presentó el primer prototipo de un sistema de gestión de
        bases de datos relacionales, basado en el modelo relacional de Codd.
        Este sistema, conocido como System R, introdujo conceptos clave como el
        lenguaje de consulta relacional (SQL) y las transacciones ACID.
      </p>
      <h4>Estándar SQL:</h4>
      <p>
        A medida que SQL se popularizaba y se adoptaba en la industria, surgió
        la necesidad de estandarizar el lenguaje para garantizar la
        interoperabilidad entre diferentes sistemas de gestión de bases de
        datos. En 1986, el Instituto Nacional Estadounidense de Estándares
        (ANSI) publicó el primer estándar oficial para SQL, conocido como SQL-86
        o SQL1.
      </p>
      <p>
        Desde entonces, el estándar SQL ha evolucionado continuamente con nuevas
        versiones y características. Organizaciones como el Comité Técnico
        ISO/IEC JTC 1/SC 32 han trabajado en colaboración con ANSI y otras
        organizaciones para desarrollar y mantener el estándar SQL. Algunas de
        las versiones más conocidas del estándar SQL incluyen SQL-92, SQL:1999,
        SQL:2003, SQL:2008 y SQL:2016.
      </p>
      <h4>Impacto y Uso Actual:</h4>
      <p>
        Hoy en día, SQL es omnipresente en el mundo de la tecnología y la
        gestión de datos. Se utiliza en una amplia variedad de aplicaciones y
        sistemas, desde aplicaciones web y móviles hasta sistemas empresariales
        y de análisis de datos.
      </p>
      <p>
        El lenguaje SQL ha evolucionado para admitir características avanzadas,
        como consultas complejas, manipulación de datos multidimensionales,
        transacciones distribuidas y análisis de big data. Además, la adopción
        de SQL en sistemas de código abierto como MySQL, PostgreSQL y SQLite ha
        ampliado aún más su alcance y accesibilidad.
      </p>
      <p>
        En resumen, la historia y evolución de SQL reflejan su importancia
        duradera como lenguaje fundamental para la gestión y manipulación de
        bases de datos relacionales en la era digital.
      </p>
      <h3>1.1.2 Propósito y Uso de SQL</h3>
      <p>
        SQL, o Structured Query Language, se ha convertido en un estándar de
        facto para la gestión de bases de datos relacionales. Su propósito y uso
        abarcan una amplia gama de aplicaciones y casos de uso en el ámbito de
        la tecnología y los negocios.
      </p>
      <h4>Propósito de SQL:</h4>
      <p>
        El propósito principal de SQL es permitir a los usuarios interactuar con
        bases de datos relacionales de manera eficiente y efectiva. SQL
        proporciona un conjunto de comandos y operaciones que permiten realizar
        diversas tareas, como consultar datos, insertar nuevos registros,
        actualizar información existente y eliminar datos.
      </p>
      <p>
        Además de manipular datos, SQL también es utilizado para administrar la
        estructura de las bases de datos relacionales. Esto incluye la creación
        y modificación de tablas, la definición de restricciones de integridad,
        la creación de índices para mejorar el rendimiento y la gestión de
        usuarios y permisos de acceso.
      </p>
      <h4>Uso de SQL:</h4>
      <p>
        SQL se utiliza en una amplia variedad de contextos y aplicaciones,
        incluyendo:
      </p>
      <ul>
        <li>
          Desarrollo de Aplicaciones Web y Móviles: Muchas aplicaciones web y
          móviles utilizan bases de datos relacionales como MySQL, PostgreSQL o
          SQLite como backend de almacenamiento de datos. SQL se utiliza para
          realizar consultas a la base de datos y manipular los datos según sea
          necesario.
        </li>
        <li>
          Sistemas Empresariales: En entornos empresariales, SQL se utiliza para
          gestionar grandes volúmenes de datos, realizar informes y análisis, y
          automatizar procesos comerciales. Los sistemas de gestión de bases de
          datos (DBMS) empresariales como Oracle Database, Microsoft SQL Server
          y IBM Db2 son ampliamente utilizados en este contexto.
        </li>
        <li>
          Análisis de Datos y Business Intelligence: SQL desempeña un papel
          crucial en el análisis de datos y la inteligencia empresarial (BI). Se
          utiliza para extraer, transformar y cargar datos (ETL), realizar
          consultas complejas para analizar patrones y tendencias, y generar
          informes y paneles de control para la toma de decisiones
          empresariales.
        </li>
        <li>
          Desarrollo de Software y Ciencia de Datos: Los desarrolladores de
          software y los científicos de datos utilizan SQL para trabajar con
          datos estructurados en una variedad de aplicaciones y proyectos. Desde
          el desarrollo de sistemas de gestión de contenido hasta el análisis de
          datos genómicos, SQL proporciona una forma poderosa y flexible de
          interactuar con los datos.
        </li>
      </ul>
      <p>
        En resumen, el propósito y uso de SQL abarcan una amplia gama de
        escenarios y aplicaciones en la tecnología moderna y los negocios. Su
        flexibilidad, eficiencia y capacidad para manejar grandes volúmenes de
        datos lo convierten en una herramienta invaluable para la gestión y
        manipulación de datos relacionales.
      </p>
      <h3>1.2 Sistemas de Gestión de Bases de Datos (DBMS)</h3>
      <p>
        Los Sistemas de Gestión de Bases de Datos (DBMS) son software diseñados
        para facilitar la creación, manipulación y administración de bases de
        datos. Estos sistemas proporcionan un entorno seguro y eficiente para
        almacenar y recuperar datos, y ofrecen una variedad de características y
        funcionalidades para satisfacer las necesidades de diferentes
        aplicaciones y usuarios.
      </p>
      <h4>Características clave de los DBMS:</h4>
      <ul>
        <li>
          <strong>Almacenamiento de Datos:</strong> Los DBMS permiten almacenar
          datos de manera estructurada en tablas, lo que facilita la
          organización y recuperación eficiente de la información.
        </li>
        <li>
          <strong>Manipulación de Datos:</strong> Los DBMS ofrecen un conjunto
          de operaciones para insertar, actualizar, eliminar y consultar datos,
          utilizando un lenguaje de consulta como SQL (Structured Query
          Language).
        </li>
        <li>
          <strong>Integridad de Datos:</strong> Los DBMS garantizan la
          integridad de los datos mediante la aplicación de restricciones, como
          claves primarias y foráneas, y la validación de datos para evitar
          inconsistencias y errores.
        </li>
        <li>
          <strong>Seguridad:</strong> Los DBMS proporcionan mecanismos de
          seguridad para proteger los datos sensibles, como el control de acceso
          basado en roles, la autenticación de usuarios y el cifrado de datos.
        </li>
        <li>
          <strong>Concurrencia y Control de Transacciones:</strong> Los DBMS
          gestionan la concurrencia de múltiples usuarios que acceden y
          modifican los mismos datos simultáneamente, garantizando la
          consistencia y la integridad de la base de datos mediante el control
          de transacciones.
        </li>
        <li>
          <strong>Escalabilidad y Rendimiento:</strong> Los DBMS están diseñados
          para escalar y manejar grandes volúmenes de datos, proporcionando un
          rendimiento óptimo incluso en entornos de alta carga.
        </li>
      </ul>
      <h4>Tipos de DBMS:</h4>
      <ul>
        <li>
          <strong>DBMS Relacionales:</strong> Estos sistemas almacenan datos en
          forma de tablas relacionadas entre sí mediante claves primarias y
          foráneas. Ejemplos incluyen MySQL, PostgreSQL, Oracle Database y
          Microsoft SQL Server.
        </li>
        <li>
          <strong>DBMS No Relacionales (NoSQL):</strong> Estos sistemas utilizan
          modelos de datos no relacionales y están diseñados para manejar
          grandes volúmenes de datos no estructurados o semiestructurados.
          Ejemplos incluyen MongoDB, Cassandra y Redis.
        </li>
        <li>
          <strong>DBMS en Memoria:</strong> Estos sistemas almacenan datos en la
          memoria principal del sistema en lugar de en discos, lo que
          proporciona un acceso más rápido a los datos. Ejemplos incluyen Redis,
          MemSQL y VoltDB.
        </li>
        <li>
          <strong>DBMS Integrados:</strong> Estos sistemas están integrados con
          aplicaciones específicas y están diseñados para su uso en entornos
          embebidos o de aplicaciones específicas. Ejemplos incluyen SQLite y
          Berkeley DB.
        </li>
      </ul>
      <p>
        En resumen, los DBMS son herramientas fundamentales en el campo de la
        gestión de datos, proporcionando un entorno robusto y eficiente para
        almacenar, manipular y administrar bases de datos en una variedad de
        aplicaciones y entornos.
      </p>
      <h3>1.2.1 Relacionales vs. No Relacionales</h3>
      <p>
        En el mundo de los Sistemas de Gestión de Bases de Datos (DBMS), existen
        dos paradigmas principales: los sistemas relacionales y los sistemas no
        relacionales (también conocidos como NoSQL). Ambos enfoques tienen sus
        propias características, ventajas y desventajas, y se utilizan en
        diferentes escenarios según las necesidades de la aplicación y los
        requisitos de los datos.
      </p>
      <h4>Sistemas Relacionales (SQL):</h4>
      <ul>
        <li>
          <strong>Modelo de Datos:</strong> Los sistemas relacionales almacenan
          datos en forma de tablas relacionadas entre sí mediante claves
          primarias y foráneas. Los datos se organizan en filas y columnas, lo
          que facilita la representación y la manipulación de la información.
        </li>
        <li>
          <strong>SQL (Structured Query Language):</strong> Los sistemas
          relacionales utilizan SQL como lenguaje estándar para realizar
          consultas y operaciones en la base de datos. SQL proporciona un
          conjunto rico de comandos para realizar consultas, actualizaciones,
          inserciones y eliminaciones de datos.
        </li>
        <li>
          <strong>Transacciones ACID:</strong> Los sistemas relacionales
          garantizan la integridad de los datos mediante el cumplimiento de las
          propiedades ACID (Atomicidad, Consistencia, Aislamiento y
          Durabilidad), lo que garantiza que las transacciones sean confiables y
          consistentes incluso en entornos concurrentes.
        </li>
        <li>
          <strong>Esquema Fijo:</strong> En los sistemas relacionales, el
          esquema de la base de datos se define mediante un esquema fijo y
          predefinido, que especifica la estructura de las tablas, los tipos de
          datos y las restricciones de integridad.
        </li>
      </ul>
      <h4>Sistemas No Relacionales (NoSQL):</h4>
      <ul>
        <li>
          <strong>Modelo de Datos Flexible:</strong> Los sistemas NoSQL admiten
          una variedad de modelos de datos, incluidos documentos, columnas,
          grafos y clave-valor. Esto proporciona flexibilidad para manejar
          diferentes tipos de datos y estructuras de datos.
        </li>
        <li>
          <strong>Diseño Distribuido y Escalabilidad:</strong> Los sistemas
          NoSQL están diseñados para escalar horizontalmente y manejar grandes
          volúmenes de datos distribuidos en clústeres de servidores. Esto
          permite un rendimiento escalable y una alta disponibilidad.
        </li>
        <li>
          <strong>Consultas No Estructuradas:</strong> En los sistemas NoSQL,
          las consultas suelen ser menos estructuradas que en los sistemas
          relacionales. Algunos sistemas NoSQL ofrecen capacidades de consulta
          ad hoc, mientras que otros se centran en la recuperación eficiente de
          datos mediante claves de acceso.
        </li>
        <li>
          <strong>Consistencia Flexible:</strong> Los sistemas NoSQL ofrecen
          diferentes niveles de consistencia, desde la consistencia eventual
          hasta la consistencia fuerte, lo que permite a los desarrolladores
          elegir el nivel de consistencia adecuado según los requisitos de la
          aplicación.
        </li>
      </ul>
      <p>
        En conclusión, tanto los sistemas relacionales como los NoSQL tienen su
        lugar en el panorama de la gestión de bases de datos, y la elección
        entre ellos depende de factores como el modelo de datos, los requisitos
        de escalabilidad, las necesidades de rendimiento y la complejidad de las
        consultas.
      </p>

      <h3> 1.2.2 Ejemplos de DBMS Populares</h3>
      <p>
        En el mundo de la gestión de bases de datos, hay una variedad de
        sistemas de gestión de bases de datos (DBMS) populares que se utilizan
        para almacenar, manipular y recuperar datos de manera eficiente. A
        continuación, se presentan algunos ejemplos destacados:
      </p>
      <ul>
        <li>
          <strong>Sistemas Relacionales:</strong>

          <ul>
            <li>
              <strong>MySQL:</strong> MySQL es uno de los sistemas de gestión de
              bases de datos relacionales más populares y ampliamente utilizados
              en el mundo. Es de código abierto y se destaca por su velocidad,
              confiabilidad y facilidad de uso.
            </li>
            <li>
              <strong>PostgreSQL:</strong> PostgreSQL es otro sistema de gestión
              de bases de datos relacional de código abierto que se destaca por
              su robustez, extensibilidad y soporte para características
              avanzadas como las funciones y los procedimientos almacenados.
            </li>
            <li>
              <strong>Oracle Database:</strong> Oracle Database es un DBMS
              relacional de propósito general desarrollado por Oracle
              Corporation. Es conocido por su escalabilidad, seguridad y
              capacidad para manejar grandes cargas de trabajo empresariales.
            </li>
          </ul>
        </li>
        <li>
          <strong>Sistemas NoSQL:</strong>

          <ul>
            <li>
              <strong>MongoDB:</strong> MongoDB es un sistema de base de datos
              NoSQL de documentos que se basa en un modelo de datos flexible de
              tipo JSON. Es altamente escalable y se utiliza comúnmente en
              aplicaciones web y móviles para almacenar datos no estructurados.
            </li>
            <li>
              <strong>Redis:</strong> Redis es una base de datos NoSQL de tipo
              clave-valor que se utiliza para almacenar datos en memoria con
              alta velocidad de acceso. Es ideal para casos de uso que requieren
              caché, sesiones de usuario y colas de mensajes.
            </li>
            <li>
              <strong>Cassandra:</strong> Apache Cassandra es una base de datos
              NoSQL distribuida y escalable diseñada para manejar grandes
              volúmenes de datos distribuidos en múltiples nodos. Es conocida
              por su alta disponibilidad y tolerancia a fallos.
            </li>
          </ul>
        </li>
        <li>
          <strong>Sistemas de Bases de Datos en la Nube:</strong>

          <ul>
            <li>
              <strong>Amazon RDS:</strong> Amazon Relational Database Service
              (RDS) es un servicio de bases de datos relacional totalmente
              administrado que permite implementar, operar y escalar bases de
              datos en la nube de Amazon Web Services (AWS).
            </li>
            <li>
              <strong>Google Cloud Spanner:</strong> Google Cloud Spanner es un
              servicio de bases de datos relacional globalmente distribuido que
              ofrece escalabilidad horizontal y consistencia transaccional a
              nivel global. Es ideal para aplicaciones empresariales de misión
              crítica.
            </li>
            <li>
              <strong>Microsoft Azure Cosmos DB:</strong> Azure Cosmos DB es un
              servicio de base de datos NoSQL multimodal que admite múltiples
              modelos de datos, incluidos documentos, columnas, grafos y
              clave-valor. Ofrece escalabilidad elástica y baja latencia global.
            </li>
          </ul>
        </li>
      </ul>
      <p>
        Estos son solo algunos ejemplos de los numerosos sistemas de gestión de
        bases de datos disponibles en el mercado. La elección del DBMS adecuado
        depende de los requisitos específicos de cada proyecto, incluidos el
        rendimiento, la escalabilidad, la consistencia y la disponibilidad.
      </p>

      <h3>1.3 Instalación y Configuración</h3>
      <p>
        La instalación y configuración de un sistema de gestión de bases de
        datos (DBMS) varía según el DBMS específico que se elija. A
        continuación, se presenta una visión general de los pasos comunes para
        instalar y configurar un DBMS:
      </p>
      <ol>
        <li>
          <strong>Seleccionar el DBMS:</strong> El primer paso es elegir el
          sistema de gestión de bases de datos más adecuado para sus
          necesidades. Esto puede depender de factores como el tipo de datos que
          se manejarán, el rendimiento requerido, la escalabilidad y los
          requisitos de disponibilidad.
        </li>
        <li>
          <strong>Descargar el Software:</strong> Una vez seleccionado el DBMS,
          se debe descargar el software desde el sitio web oficial del proveedor
          o desde un repositorio de software confiable.
        </li>
        <li>
          <strong>Instalar el Software:</strong> El proceso de instalación puede
          variar según el sistema operativo. Por lo general, implica ejecutar un
          instalador y seguir las instrucciones en pantalla para completar la
          instalación. Es importante asegurarse de instalar todas las
          dependencias y componentes necesarios.
        </li>
        <li>
          <strong>Configurar el DBMS:</strong> Después de la instalación, es
          necesario configurar el DBMS según los requisitos específicos de su
          entorno. Esto puede incluir la configuración de la ubicación de los
          archivos de datos, la asignación de recursos del sistema, la
          configuración de la seguridad y la autenticación, y la optimización
          del rendimiento.
        </li>
        <li>
          <strong>Crear Bases de Datos y Tablas:</strong> Una vez configurado el
          DBMS, puede comenzar a crear bases de datos y tablas para almacenar
          sus datos. Esto implica definir la estructura de la base de datos,
          incluidas las tablas, columnas, índices y restricciones.
        </li>
        <li>
          <strong>Realizar Pruebas:</strong> Antes de poner en producción el
          DBMS, es importante realizar pruebas exhaustivas para asegurarse de
          que todo esté funcionando correctamente. Esto puede incluir pruebas de
          integración, pruebas de rendimiento y pruebas de seguridad.
        </li>
        <li>
          <strong>Implementar Copias de Seguridad:</strong> Para proteger sus
          datos contra pérdidas accidentales o corrupción, es fundamental
          implementar un plan de copias de seguridad periódicas. Esto
          garantizará que pueda restaurar sus datos en caso de un desastre.
        </li>
      </ol>
      <p>
        Estos son solo algunos de los pasos comunes involucrados en la
        instalación y configuración de un DBMS. Es importante seguir las mejores
        prácticas y las recomendaciones del proveedor del DBMS para garantizar
        una implementación exitosa y un funcionamiento óptimo del sistema.
      </p>

      <h3> 1.3.1 Instalación de un DBMS</h3>
      <p>
        La instalación de un sistema de gestión de bases de datos (DBMS) puede
        variar según el proveedor y el sistema operativo. Aquí hay una guía
        general sobre cómo instalar un DBMS:
      </p>
      <p>
        <strong>1. Descargar el Software:</strong> Visite el sitio web oficial
        del proveedor del DBMS y busque la sección de descargas. Allí encontrará
        las versiones disponibles del software para diferentes sistemas
        operativos.
      </p>
      <p>
        <strong>2. Seleccionar la Versión y Descargar:</strong> Elija la versión
        adecuada del software para su sistema operativo y arquitectura (32 bits
        o 64 bits). Descargue el archivo de instalación en su computadora local.
      </p>
      <p>
        <strong>3. Ejecutar el Instalador:</strong> Una vez que se complete la
        descarga, ejecute el archivo de instalación. Es posible que necesite
        permisos de administrador para completar esta acción en su sistema
        operativo.
      </p>
      <p>
        <strong>4. Seguir las Instrucciones en Pantalla:</strong> El instalador
        guiará a través del proceso de instalación paso a paso. Lea cada
        pantalla cuidadosamente y siga las instrucciones proporcionadas.
      </p>
      <p>
        <strong>5. Seleccionar Opciones de Instalación:</strong> Durante la
        instalación, se le puede pedir que elija las opciones de configuración,
        como la ubicación de instalación, los componentes adicionales y las
        configuraciones de seguridad. Ajuste estas opciones según sus
        necesidades.
      </p>
      <p>
        <strong>6. Completar la Instalación:</strong> Una vez que haya
        configurado todas las opciones de instalación, haga clic en el botón
        "Instalar" o "Finalizar" para completar el proceso de instalación.
        Espere a que la instalación se complete.
      </p>
      <p>
        <strong>7. Verificar la Instalación:</strong> Después de la instalación,
        verifique que el DBMS se haya instalado correctamente. Puede hacerlo
        buscando el programa en el menú de inicio (en Windows), utilizando
        comandos en la terminal (en Linux) o ejecutando una verificación de
        versión desde la línea de comandos.
      </p>
      <p>
        Es importante seguir las instrucciones específicas proporcionadas por el
        proveedor del DBMS para garantizar una instalación correcta y sin
        problemas.
      </p>
      <h3>1.3.2 Configuración básica</h3>
      <p>
        Después de instalar un sistema de gestión de bases de datos (DBMS), es
        importante realizar algunas configuraciones básicas para asegurarse de
        que esté listo para su uso. Aquí hay algunos pasos comunes para la
        configuración inicial:
      </p>
      <p>
        <strong>1. Configurar la Seguridad:</strong> Asegúrese de establecer
        contraseñas seguras para las cuentas de administrador y usuarios, y
        limite el acceso a la base de datos según sea necesario.
      </p>
      <p>
        <strong>2. Establecer la Codificación de Caracteres:</strong> Elija una
        codificación de caracteres adecuada para su base de datos, especialmente
        si espera almacenar datos en múltiples idiomas o con caracteres
        especiales.
      </p>
      <p>
        <strong>3. Definir Espacios de Almacenamiento:</strong> Configure los
        directorios de almacenamiento para los datos, los archivos de registro y
        los archivos temporales. Asegúrese de que haya suficiente espacio en
        disco disponible para el crecimiento futuro de la base de datos.
      </p>
      <p>
        <strong>4. Establecer Configuraciones de Rendimiento:</strong> Ajuste
        las configuraciones de rendimiento del DBMS según sea necesario para
        optimizar el rendimiento de las consultas y transacciones. Esto puede
        incluir la configuración de la memoria del sistema, el tamaño del búfer
        y otros parámetros.
      </p>
      <p>
        <strong>5. Configurar Copias de Seguridad y Restauración:</strong>{" "}
        Implemente un plan de copia de seguridad regular para proteger sus datos
        contra pérdidas. Pruebe regularmente la capacidad de restauración para
        asegurarse de que las copias de seguridad sean válidas y completas.
      </p>
      <p>
        <strong>6. Monitorear y Registrar la Actividad:</strong> Configure
        herramientas de monitoreo y registro para supervisar la actividad de la
        base de datos, incluidas las consultas ejecutadas, el uso de recursos y
        los eventos del sistema. Esto puede ayudar a identificar problemas de
        rendimiento y seguridad.
      </p>
      <p>
        <strong>7. Actualizar y Parchear Regularmente:</strong> Mantenga su DBMS
        actualizado con las últimas versiones y parches de seguridad para
        protegerse contra vulnerabilidades conocidas y errores de software.
      </p>
      <p>
        Al realizar estas configuraciones básicas, puede asegurarse de que su
        DBMS esté listo para admitir las necesidades de su aplicación y
        garantizar un funcionamiento seguro y eficiente.
      </p>
      <h3> Tipos de datos en SQL </h3>
      <p>
        Los tipos de datos en SQL son utilizados para definir el tipo de valor
        que puede almacenarse en una co‐ lumna de una tabla. Cada columna en una
        tabla está asociada a un tipo de datos que determina qué tipo de valores
        pueden ser almacenados en esa columna. Los tipos de datos en SQL pueden
        ser clasificados en diferentes categorías, tales como numéricos, de
        texto, de fecha y hora, binarios, etc.
      </p>
<br />
      <p>Tipos de Datos Numéricos:</p>
      <ul>
        <li>
          INTEGER: Se utiliza para almacenar números enteros que puede ser
          positivo, negativo o cero.
        </li>
        <li>
          DECIMAL(p, s): Se utiliza para almacenar números decimales con una
          precisión p {"(es la cantidad total de dígitos)"} y una escala s{" "}
          {"(los decimales)"}.
        </li>
        <li>
          FLOAT(p): Se utiliza para almacenar números de punto flotante con
          precisión p {"(es la cantidad total de dígitos)"}.
        </li>
      </ul>
<br />
      <p>Tipos de Datos de Texto:</p>
      <ul>
        <li>
          CHAR(n): Se utiliza para almacenar cadenas de caracteres de longitud
          fija de tamaño n.
        </li>
        <li>
          VARCHAR(n): Se utiliza para almacenar cadenas de caracteres de
          longitud variable con un máximo de n caracteres.
        </li>
        <li>TEXT: Texto largo de hasta 65,535 caracteres.</li>
      </ul>
<br />
      <p>Tipos de Datos de Fecha y Hora:</p>
      <ul>
        <li>DATE: Se utiliza para almacenar fechas en formato 'YYYY-MM-DD'.</li>
        <li>TIME: Se utiliza para almacenar horas en formato 'HH:MM:SS'.</li>
        <li>
          TIMESTAMP: Se utiliza para almacenar marcas de tiempo en formato
          'YYYY-MM-DD HH:MM:SS'.
        </li>
      </ul>
<br />
      <p> Tipos de Datos:</p>
<ul>
  <li>BOOLEAN:	Valor lógico que puede ser TRUE (1) o FALSE (0).	TRUE, FALSE</li>
  <li>BLOB:	Almacena datos binarios como imágenes o archivos.	Imagen en formato binario</li>
</ul>

<h3>Operadores en SQL</h3>
      <p>
        Los operadores en SQL son herramientas clave para realizar operaciones
        de manipulación y filtrado de datos en las consultas. Aquí se presentan
        algunos de los operadores más comunes:
      </p>
      <ul>
        <li>
          <strong>Operadores Aritméticos:</strong> Estos operadores se utilizan
          para realizar operaciones matemáticas en valores numéricos. Algunos
          ejemplos incluyen:
          <ul>
            <li>
              <code>+</code> (Suma)
            </li>
            <li>
              <code>-</code> (Resta)
            </li>
            <li>
              <code>*</code> (Multiplicación)
            </li>
            <li>
              <code>/</code> (División)
            </li>
            <li>
              <code>%</code> (Módulo o resto)
            </li>
          </ul>
        </li>
        <li>
          <strong>Operadores de Comparación:</strong> Se utilizan para comparar
          valores y devolver resultados booleanos (verdadero o falso). Algunos
          ejemplos son:
          <ul>
            <li>
              <code>=</code> (Igual a)
            </li>
            <li>
              <code>!=</code> o <code>&lt;&gt;</code> (Diferente de)
            </li>
            <li>
              <code>&lt;</code> (Menor que)
            </li>
            <li>
              <code>&gt;</code> (Mayor que)
            </li>
            <li>
              <code>&lt;=</code> (Menor o igual que)
            </li>
            <li>
              <code>&gt;=</code> (Mayor o igual que)
            </li>
          </ul>
        </li>
        <li>
          <strong>Operadores Lógicos:</strong> Estos operadores se utilizan para
          combinar condiciones lógicas. Algunos ejemplos son:
          <ul>
            <li>
              <code>AND</code> (y lógico)
            </li>
            <li>
              <code>OR</code> (o lógico)
            </li>
            <li>
              <code>NOT</code> (negación lógica)
            </li>
          </ul>
        </li>
        <li>
          <strong>Operadores de Concatenación:</strong> Se utilizan para
          combinar cadenas de texto. El operador más común es:
          <ul>
            <li>
              <code>||</code> (Concatenación de cadenas)
            </li>
          </ul>
        </li>
        <li>
          <strong>Operadores de Asignación:</strong> Utilizados para asignar
          valores a variables. Por ejemplo:
          <ul>
            <li>
              <code>:=</code> (Asignación simple)
            </li>
          </ul>
        </li>
      </ul>

      <h3> NULL y valores predeterminados</h3>
      <p>
        En SQL, los valores NULL representan la ausencia de un valor o la falta
        de datos en una columna específica de una tabla. Aquí hay algunas
        características importantes sobre los valores NULL:
      </p>
      <ul>
        <li>
          Un valor NULL no es lo mismo que un valor cero o una cadena vacía. Es
          un valor especial que indica la falta de un valor conocido o válido.
        </li>
        <li>
          Las columnas de una tabla pueden permitir valores NULL, lo que
          significa que los registros en esa tabla pueden tener valores NULL en
          esas columnas.
        </li>
        <li>
          Los operadores de comparación con NULL, como "=", "!=",{" "}
          {"" > ", " < ""}, etc., devolverán resultados desconocidos (o NULL) en
          lugar de verdadero o falso.
        </li>
        <li>
          Es importante manejar los valores NULL correctamente en consultas SQL
          para evitar resultados inesperados o incorrectos.
        </li>
      </ul>
      <p>
        Además de los valores NULL, en SQL también es posible especificar
        valores predeterminados para las columnas. Estos valores se utilizan
        cuando no se proporciona un valor explícito durante la inserción de un
        nuevo registro.
      </p>
      <ul>
        <li>
          Los valores predeterminados pueden ser constantes, como un número o
          una cadena de caracteres, o pueden ser expresiones más complejas.
        </li>
        <li>
          Al definir una tabla, se puede especificar un valor predeterminado
          para cada columna, que se utilizará si no se proporciona un valor
          explícito durante la inserción.
        </li>
        <li>
          Los valores predeterminados son útiles para garantizar que una columna
          siempre contenga un valor válido, incluso si el usuario no proporciona
          un valor específico durante la inserción.
        </li>
      </ul>
      <div className="codigo">
        CREATE TABLE Ejemplo ( <br />
        <Esp /> id INT PRIMARY KEY, <br />
        <Esp /> nombre VARCHAR(50) DEFAULT 'Sin nombre', <br />
        <Esp /> edad INT DEFAULT 0, <br />
        <Esp /> fecha_registro DATE DEFAULT CURRENT_DATE <br />
        );
      </div>
      <p>
        En este ejemplo, la columna "nombre" tendrá el valor predeterminado 'Sin
        nombre' si no se proporciona un valor explícito durante la inserción. La
        columna "edad" tendrá el valor predeterminado 0, y la columna
        "fecha_registro" tendrá el valor predeterminado de la fecha actual.
      </p>

      <h4>ENUM</h4>
      <p>
      El atributo ENUM permite definir una lista de valores permitidos para una columna.
      </p>
      <div className="codigo">
CREATE TABLE empleados ( <br />
<Esp/>id INT PRIMARY KEY, <br />
<Esp/>nombre VARCHAR(50), <br />
<Esp/>departamento ENUM('Ventas', 'Marketing', 'Finanzas')
);
      </div>

    </article>
  );
};

export { Modulo1 };
