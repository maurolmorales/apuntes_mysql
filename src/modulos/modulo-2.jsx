import { Esp } from "../components/espacio";
const Modulo2 = () => {
  return (
    <article id="modulo-2">
      <div className="h2-topBar">
        <h2>Módulo 2: DDL {"(Data Definition Language)"}</h2>

        <a href="#indice">al Indice</a>
      </div>
      <p>
        En este módulo aprenderemos cómo crear bases de datos y tablas en un
        sistema de gestión de bases de datos relacional como MySQL. La creación
        de bases de datos y tablas es fundamental para organizar y almacenar
        datos de manera estructurada. <br />
        El Sublenguaje de Definición de Datos (DDL, por sus siglas en inglés) es
        una parte crucial de SQL que se utiliza para definir y gestionar la
        estructura de la base de datos. Con DDL, los usuarios pueden crear,
        modificar y eliminar objetos de base de datos, como tablas, índices,
        vistas y restricciones.
      </p>
      <h3 id="2.0.0">2.0.0 CREATE</h3>
      <h4>CREATE DATABASE:</h4>
      <p>
        Para crear una nueva base de datos en MySQL, utilizamos el comando
        seguido del nombre de la base de datos que deseamos crear. Para crear
        una base de datos llamada "mi_base_datos", usaríamos el siguiente
        comando:
      </p>
      <div className="codigo">CREATE DATABASE mi_base_datos;</div>
      <h4>CREATE TABLE:</h4> Se utiliza para crear una nueva tabla en la base de
      datos. Sintaxis:
      <div className="codigo">
        CREATE TABLE nombre_tabla (columna1 tipo_dato1, columna2 tipo_dato2,
        ...)
      </div>
      <p>
        Permite especificar el nombre de la tabla, así como las columnas y sus
        tipos de datos. Ejemplo:
      </p>
      <div className="codigo">
        CREATE TABLE empleados (<br />
        <Esp />
        id_empleado INT UNSIGNED NOT NULL AUTO_INCREMENT,
        <br />
        <Esp />
        nombre VARCHAR(50) NOT NULL, <br />
        <Esp />
        apellido VARCHAR(50) NOT NULL, <br />
        <Esp />
        puesto VARCHAR(30), <br />
        <Esp />
        salario DECIMAL(10, 2), <br />
        <Esp />
        fecha_ingreso DATE, <br />
        <Esp />
        PRIMARY KEY (id_empleado) <br />
        );
      </div>
      <h4>CREATE INDEX:</h4> Se utiliza para crear un nuevo índice en una o más
      columnas de una tabla. Permite mejorar el rendimiento de las consultas al
      acelerar la búsqueda de registros.
      <div className="codigo">
        CREATE INDEX nombre_indice ON nombre_tabla (columna1, columna2, ...)
      </div>
      <div className="codigo">
        CREATE INDEX idx_nombre ON usuarios (nombre);
      </div>
      <h3 id="2.1.0">2.1.0 ALTER</h3>
      <p>
        Se utiliza para modificar la estructura de una tabla existente,
        agregando, modificando o eliminando columnas.
      </p>
      <br />
      <h4>ALTER TABLE:</h4> Se utiliza para modificar la estructura de una tabla
      existente, agregando, modificando o eliminando columnas.
      <ul>
        <li>
          <strong>Agregar una columna. (ADD)</strong>
          <div className="codigo">
            ALTER TABLE nombre_tabla ADD columna tipo_dato
          </div>
          <div className="codigo">
            ALTER TABLE usuarios ADD apellido VARCHAR(50);
          </div>
        </li>
        <li>
          <strong> Modificar una columna existente (MODIFY)</strong>
          <div className="codigo">
            ALTER TABLE empleados MODIFY salario DECIMAL(12, 2);
          </div>
        </li>
        <li>
          <strong>Eliminar una columna (DROP)</strong>
          <div className="codigo">
            ALTER TABLE empleados DROP COLUMN puesto;
          </div>
        </li>
      </ul>
      <strong>ALTER INDEX:</strong> Se utiliza para modificar un índice
      existente, por ejemplo, para cambiar su nombre o agregar una nueva
      columna.
      <div className="codigo">
        ALTER INDEX nombre_indice RENAME TO nuevo_nombre
      </div>
      <div className="codigo">
        ALTER INDEX idx_nombre RENAME TO idx_apellido;
      </div>
      <h3 id="2.2.0">2.2.0 RENAME</h3>
      <p>
        su propósito principal es renombrar objetos dentro de una base de datos,
        como tablas, vistas o columnas (aunque las columnas requieren un comando
        diferente, como ALTER TABLE
      </p>
      <div className="codigo">
        RENAME TABLE nombre_tabla_actual TO nuevo_nombre_tabla;
      </div>
      <div className="codigo">RENAME TABLE empleados TO trabajadores;</div>
      <h4> Renombrar múltiples tablas (en algunos motores)</h4>
      <p>
        Algunos sistemas de bases de datos, como MySQL, permiten renombrar
        varias tablas a la vez.
      </p>
      <div className="codigo">
        RENAME TABLE productos TO inventario, clientes TO usuarios;
      </div>
      <p>
        El comando RENAME no funciona para columnas directamente. Cuando cambias
        el nombre de una tabla o columna, asegúrate de actualizar todos los
        scripts, vistas, procedimientos almacenados o consultas que dependan del
        objeto renombrado. Se puede usar para reorganizar nombres en tu base de
        datos, corregir errores de escritura en los nombres y/o durante un
        rediseño de tu base de datos.
      </p>
      <ul>
        <li>MySQL: Soporta RENAME TABLE.</li>
        <li>PostgreSQL: Usa ALTER TABLE nombre RENAME TO nuevo_nombre.</li>
        <li>SQL Server: Usa sp_rename para cambiar nombres</li>
      </ul>
      <h3 id="2.3.0">2.3.0 DROP</h3>
      <p>
        Este comando elimina permanentemente la tabla y todos sus datos. No se
        puede deshacer, por lo que se debe usar con cuidado.
      </p>
      <strong>DROP TABLE:</strong> Se utiliza para eliminar una tabla existente
      de la base de datos.
      <div className="codigo">DROP TABLE nombre_tabla</div>
      <div className="codigo">DROP TABLE usuarios;</div>
      <strong>DROP INDEX:</strong> Se utiliza para eliminar un índice existente
      de la base de datos.
      <div className="codigo">DROP INDEX nombre_indice</div>
      <div className="codigo">DROP INDEX idx_nombre;</div>
      <h3 id="2.4.0">2.4.0 TRUNCATE</h3>
      <ul>
        <li>
          <strong>TRUNCATE TABLE:</strong> Se utiliza para eliminar todos los
          registros de una tabla, pero no elimina la estructura de la tabla en
          sí. Es más rápido, ya que no registra cada fila eliminada. No se puede
          usar con tablas referenciadas por claves foráneas.
          <div className="codigo">TRUNCATE TABLE nombre_tabla</div>
          <div className="codigo">TRUNCATE TABLE usuarios;</div>
        </li>
        <li>
          <strong>DELETE:</strong> Se utiliza para eliminar uno o varios
          registros de una tabla, con la posibilidad de especificar condiciones
          para la eliminación.
          <div className="codigo">DELETE FROM nombre_tabla WHERE condicion</div>
          <div className="codigo">DELETE FROM usuarios WHERE id = 1;</div>
        </li>
      </ul>
      <h3 id="2.5.0">2.5.0 LOCK</h3>
      <p>
        Bloquea una tabla para evitar que otros usuarios la modifiquen mientras
        se realiza una operación. <br />
        WRITE: Bloqueo exclusivo para escritura. <br />
        READ: Bloqueo para solo lectura.
      </p>
      <div className="codigo">
        LOCK TABLES empleados WRITE; <br />
        <Esp /> -- Aquí puedes realizar operaciones en la tabla empleados.{" "}
        <br />
        UNLOCK TABLES;
      </div>
      <h3 id="2.6.0">2.6.0 Restricciones en SQL (Constraints)</h3>
      <p>
        Las restricciones, o constraints, son reglas que se aplican a las
        columnas de una tabla en SQL para garantizar la integridad y la validez
        de los datos. Estas restricciones ayudan a definir los límites dentro de
        los cuales deben operar los datos, evitando inconsistencias o errores en
        la base de datos. Garantizan la calidad de los datos. Evitan errores
        lógicos en las operaciones con la base de datos. Facilitan la definición
        de relaciones y reglas entre tablas (en el caso de claves foráneas y
        primarias).
      </p>
      <h4>NOT NULL</h4>
      <p>Garantiza que una columna no pueda contener valores nulos (NULL).</p>
      <div className="codigo">
        CREATE TABLE usuarios ( <br />
        <Esp />
        id_usuario INT PRIMARY KEY, <br />
        <Esp />
        nombre VARCHAR(50) NOT NULL <br />
        );
      </div>
      <h4>UNIQUE</h4>
      <p>
        Asegura que todos los valores en una columna sean únicos, es decir, no
        puede haber duplicados. Ideal para valores que deben ser únicos, pero no
        necesariamente claves primarias.
      </p>
      <div className="codigo">
        CREATE TABLE productos ( <br />
        <Esp /> id_producto INT PRIMARY KEY, <br />
        <Esp /> codigo_barra VARCHAR(20) UNIQUE <br />
        );
      </div>
      <h4>DEFAULT</h4>
      <p>
        Asigna un valor por defecto a una columna si no se proporciona uno
        durante una inserción.Útil para columnas opcionales donde queremos
        valores predeterminados.
      </p>
      <div className="codigo">
        CREATE TABLE pedidos ( <br />
        <Esp /> id_pedido INT PRIMARY KEY, <br />
        <Esp /> estado VARCHAR(15) DEFAULT 'Pendiente' <br />
        );
      </div>
      <h4>CHECK</h4>
      <p>
        Valida que los valores de una columna cumplan con una condición
        específica. Garantiza que los datos se ajusten a un rango o formato
        predefinido.
      </p>
      <div className="codigo">
        CREATE TABLE empleados ( <br />
        <Esp /> id_empleado INT PRIMARY KEY, <br />
        <Esp /> edad INT CHECK (edad {">="} 18 AND edad {"<="} 65) <br />
        );
      </div>
      <h4>PRIMARY KEY</h4>
      <p>
        Identifica de manera única cada registro en una tabla. Combina las
        restricciones NOT NULL y UNIQUE. Garantiza que cada fila sea única e
        identificable.
      </p>
      <div className="codigo">
        CREATE TABLE clientes ( <br />
        <Esp /> id_cliente INT PRIMARY KEY, <br />
        <Esp /> nombre VARCHAR(50) NOT NULL <br />
        );
      </div>
      <h4>FOREIGN KEY</h4>
      <p>
        Establece una relación entre tablas y garantiza la integridad
        referencial. Asocia una columna con la clave primaria de otra tabla.
      </p>
      <div className="codigo">
        CREATE TABLE ordenes ( <br />
        <Esp /> id_orden INT PRIMARY KEY, <br />
        <Esp /> id_cliente INT, <br />
        <Esp /> FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente) <br />
        );
      </div>
      <h4>
        Acciones en las Claves Foráneas: CASCADE, RESTRICT, SET NULL y
        OtrasAcciones en las Claves Foráneas: CASCADE, RESTRICT, SET NULL y
        Otras
      </h4>
      <p>
        Cuando se define una clave foránea (FOREIGN KEY) en SQL, es posible
        especificar cómo debe comportarse la base de datos al eliminar o
        actualizar registros en la tabla referenciada. Estas acciones, como
        CASCADE, RESTRICT, y otras, controlan la integridad referencial y
        determinan el efecto sobre los datos relacionados.
      </p>
      <ul>
        <li>
          CASCADE: Propaga automáticamente el cambio (eliminación o
          actualización) de la fila en la tabla referenciada a todas las filas
          relacionadas en la tabla que contiene la clave foránea. Cuando se
          desea que los datos relacionados sean eliminados o actualizados junto
          con los datos principales. En el ejemplo, si se elimina un cliente en
          clientes, todos sus pedidos en pedidos también se eliminan
          automáticamente. Si se actualiza id_cliente en clientes, el cambio se
          refleja en pedidos.
          <div className="codigo">
            CREATE TABLE pedidos ( <br />
            <Esp />
            id_pedido INT PRIMARY KEY, <br />
            <Esp />
            id_cliente INT, <br />
            <Esp />
            FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente) ON DELETE
            CASCADE ON UPDATE CASCADE );
          </div>
        </li>
        <li>
          RESTRICT: Impide la eliminación o actualización de una fila en la
          tabla referenciada si existen filas relacionadas en la tabla con la
          clave foránea. Para garantizar que no se eliminen registros
          principales mientras existan dependencias. En el ejemplo, si un
          cliente tiene pedidos asociados, no se puede eliminar hasta que se
          eliminen sus pedidos.
          <div className="codigo">
            CREATE TABLE pedidos ( <br />
            <Esp /> id_pedido INT PRIMARY KEY, <br />
            <Esp /> id_cliente INT, <br />
            <Esp /> FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente) ON
            DELETE RESTRICT );
          </div>
        </li>
        <li>
          SET NULL: Establece el valor de la columna de la clave foránea en NULL
          si la fila referenciada es eliminada o actualizada. Cuando se permite
          que las filas relacionadas permanezcan, pero se desea eliminar la
          relación. En el ejemplo, si se elimina un cliente, el campo id_cliente
          en pedidos se establece en NULL.
          <div className="codigo">
            CREATE TABLE pedidos ( <br />
            <Esp /> id_pedido INT PRIMARY KEY, <br />
            <Esp /> id_cliente INT, <br />
            <Esp /> FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente) ON
            DELETE SET NULL <br />
            );
          </div>
        </li>
        <li>
          SET DEFAULT: Establece un valor predeterminado para la columna de la
          clave foránea si la fila referenciada es eliminada o actualizada. Poco
          frecuente, ya que requiere que la columna de la clave foránea tenga un
          valor predeterminado. En el ejemplo, Si se elimina un cliente, el
          campo id_cliente en pedidos se establece en su valor predeterminado
          (por ejemplo, 0).
          <div className="codigo">
            CREATE TABLE pedidos ( <br />
            <Esp /> id_pedido INT PRIMARY KEY, <br />
            <Esp /> id_cliente INT DEFAULT 0, <br />
            <Esp /> FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente) ON
            DELETE SET DEFAULT );
          </div>
        </li>
        <li>
          NO ACTION: Similar a RESTRICT, pero en este caso, la base de datos
          verifica la integridad referencial solo después de ejecutar todas las
          operaciones. Si hay violaciones, se revierte la transacción.
          <div className="codigo">
            CREATE TABLE pedidos ( <br />
            <Esp />
            id_pedido INT PRIMARY KEY, <br />
            <Esp />
            id_cliente INT, <br />
            <Esp />
            FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente) ON DELETE
            NO ACTION );
          </div>
        </li>
      </ul>
      <table>
        <tr>
          <th> Acción Efecto </th>
          <th>Descripción</th>
          <th> Común</th>
        </tr>
        <tr>
          <td> CASCADE </td>
          <td>
            Propaga eliminaciones/actualizaciones a las filas relacionadas.
          </td>
          <td> Borra o actualiza automáticamente los datos relacionados. </td>
        </tr>
        <tr>
          <td> RESTRICT </td>
          <td>
            Bloquea la eliminación/actualización si hay datos relacionados.
          </td>
          <td>
            Impide cambios en los datos principales mientras haya dependencias.
          </td>
        </tr>
        <tr>
          <td> SET NULL</td>
          <td> Establece la columna de la clave foránea en NULL. </td>
          <td> Rompe la relación sin eliminar los datos relacionados. </td>
        </tr>
        <tr>
          <td> SET DEFAULT </td>
          <td> Asigna un valor predeterminado a la clave foránea. </td>
          <td> Rompe la relación asignando un valor predefinido. </td>
        </tr>
        <tr>
          <td> NO ACTION </td>
          <td>
            Similar a RESTRICT, pero verifica la integridad referencial después
            de ejecutar las operaciones.
          </td>
          <td> Operación rechazada si viola la integridad referencial. </td>
        </tr>
      </table>
      <p>
        Usa CASCADE con precaución: puede eliminar grandes cantidades de datos
        relacionados de manera no intencional. Prefiere RESTRICT o NO ACTION si
        deseas mantener la integridad referencial estricta. Considera SET NULL
        cuando la relación puede romperse, pero los datos relacionados deben
        conservarse.
      </p>
      <br />
      <p>
        Supongamos que tenemos las tablas clientes y pedidos. Un cliente puede
        realizar varios pedidos, pero cada pedido pertenece a un cliente
        específico.
      </p>
      <div className="codigo">
        CREATE TABLE clientes ( <br />
        <Esp />
        id_cliente INT AUTO_INCREMENT, <br />
        <Esp />
        nombre_cliente VARCHAR(100), <br />
        <Esp />
        email VARCHAR(100) UNIQUE, <br />
        <Esp />
        PRIMARY KEY (id_cliente) );
        <br />
        <br />
        CREATE TABLE pedidos ( <br />
        <Esp />
        id_pedido INT AUTO_INCREMENT, <br />
        <Esp />
        id_cliente INT, <br />
        <Esp />
        fecha_pedido DATE NOT NULL, <br />
        <Esp />
        PRIMARY KEY (id_pedido), <br />
        <Esp />
        FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente) <br />
        <Esp />
        <Esp />
        ON DELETE CASCADE <br />
        <Esp />
        <Esp />
        ON UPDATE CASCADE );
      </div>
      <h4>Relaciones entre Tablas en SQL</h4>
      <p>
        Las relaciones entre tablas son la base para construir bases de datos
        relacionales, permitiendo organizar y estructurar datos de manera
        eficiente. Estas relaciones definen cómo interactúan las tablas entre
        sí, asegurando la integridad y consistencia de los datos.
      </p>
      <h5>Ventajas de las Relaciones entre Tablas</h5>
      <ul>
        <li>
          Reducción de Redundancia: Los datos no se duplican innecesariamente,
          lo que ahorra espacio y mejora la integridad.
        </li>
        <li>
          Consistencia: Las relaciones aseguran que los datos estén
          sincronizados y correctos.
        </li>
        <li>
          Flexibilidad: Es fácil consultar y combinar datos de múltiples tablas
          mediante JOINs.
        </li>
      </ul>
      <br />
      <h5>Tipos de Relaciones entre Tablas </h5>
      <ul>
        <li>
          Relación Uno a Uno (1:1): <br />
          Cada fila de una tabla está relacionada con una única fila de otra
          tabla y viceversa. <br />
          Uso común: Cuando se necesita dividir información de una tabla en dos
          por motivos de privacidad, rendimiento o modularidad.
          <div className="codigo">
            CREATE TABLE perfiles ( <br />
            <Esp /> id_perfil INT PRIMARY KEY, <br />
            <Esp /> id_usuario INT UNIQUE, <br />
            <Esp /> foto VARCHAR(255), <br />
            <Esp /> FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario){" "}
            <br />
            );
          </div>
        </li>
        <li>
          Relación Uno a Muchos (1:N): <br />
          Una fila de una tabla está relacionada con muchas filas de otra tabla,
          pero cada fila de la segunda tabla solo está relacionada con una fila
          de la primera. <br />
          Uso común: Para representar jerarquías o dependencias, como categorías
          y productos.
          <div className="codigo">
            CREATE TABLE productos ( <br />
            <Esp /> id_producto INT PRIMARY KEY, <br />
            <Esp /> id_categoria INT, <br />
            <Esp /> nombre VARCHAR(255), <br />
            <Esp /> FOREIGN KEY (id_categoria) REFERENCES
            categorias(id_categoria) <br />
            );
          </div>
        </li>
        <li>
          Relación Muchos a Muchos (M:N): <br />
          Muchas filas de una tabla están relacionadas con muchas filas de otra
          tabla. <br />
          Uso común: Para representar relaciones complejas como estudiantes
          inscritos en múltiples cursos.
          <div className="codigo">
            CREATE TABLE inscripciones ( <br />
            <Esp /> id_estudiante INT, <br />
            <Esp /> id_curso INT, <br />
            <Esp /> PRIMARY KEY (id_estudiante, id_curso), <br />
            <Esp /> FOREIGN KEY (id_estudiante) REFERENCES
            estudiantes(id_estudiante), <br />
            <Esp /> FOREIGN KEY (id_curso) REFERENCES cursos(id_curso) <br />
            );
          </div>
        </li>
      </ul>
    </article>
  );
};

export { Modulo2 };
