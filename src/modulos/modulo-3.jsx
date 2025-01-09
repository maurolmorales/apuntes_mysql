import { Esp } from "../components/espacio";
const Modulo3 = () => {
  return (
    <article id="modulo-3">
      <div className="h2-topBar">
        <h2> Módulo 3: DML {"(Data Manipulation Language)"}</h2>
        <a href="#indice">al Indice</a>
      </div>
      <p>
        El Sublenguaje DML, o Lenguaje de Manipulación de Datos, es una parte
        fundamental del lenguaje SQL que se utiliza para interactuar con los
        datos almacenados en las bases de datos.
      </p>

      <h3 id="3.0.0">3.0.0 INSERT </h3>
      <p>
        Esta sentencia nos permite especificar los valores que queremos insertar
        en cada columna de la tabla.
      </p>
      <div className="codigo">
        INSERT INTO nombre_tabla (columna1, columna2, ...) VALUES (valor1,
        valor2, ...);
      </div>
      <div className="codigo">
        INSERT INTO empleados (nombre, puesto, salario) VALUES ('Carlos Pérez',
        'Desarrollador', 3500);
      </div>
      <p>Inserción en todas las columnas (opcional):</p>
      <div className="codigo">
        INSERT INTO empleados VALUES (1, 'María López', 'Analista', 4000);
      </div>
      <p>Insertar múltiples registros:</p>

      <div className="codigo">
        INSERT INTO empleados (nombre, puesto, salario) <br />
        <Esp />
        VALUES ('Ana Gómez', 'Gerente', 5000), <br />
        <Esp />
        <Esp />
        <Esp />
        <Esp />
        <Esp />
        ('Luis Torres', 'Soporte', 2800);
      </div>

      <h3 id="3.1.0">3.1.0 UPDATE </h3>
      <p>
        El comando UPDATE se utiliza para modificar los valores de una o varias
        filas existentes en una tabla. La cláusula SET especifica las columnas
        que se van a actualizar y los valores nuevos que se les asignarán. La
        cláusula WHERE es opcional y se utiliza para especificar qué filas deben
        actualizarse. Si se omite la cláusula WHERE, se actualizarán todas las
        filas de la tabla.
      </p>

      <div className="codigo">
        UPDATE nombre_tabla <br />
        SET columna1 = valor1, columna2 = valor2 <br />
        WHERE condición;
      </div>
      <div className="codigo">
        UPDATE empleados <br />
        SET salario = 4000 <br />
        WHERE puesto = 'Soporte Técnico';
      </div>
      <p>Actualizar múltiples columnas:</p>
      <div className="codigo">
        UPDATE empleados <br />
        SET salario = 6000, puesto = 'Gerente General' <br />
        WHERE nombre = 'Ana Gómez';
      </div>

      <h3 id="3.3.0">3.3.0 DELETE </h3>
      <p>El comando DELETE permite borrar registros de una tabla.</p>
      <div className="codigo">DELETE FROM nombre_tabla WHERE condición;</div>
      <div className="codigo">
        DELETE FROM empleados WHERE puesto = 'Soporte Técnico';
      </div>
      <p>Eliminar todos los registros (usar con precaución):</p>
      <div className="codigo">DELETE FROM empleados;</div>
      <h5>Diferencia entre DELETE y TRUNCATE:</h5>

      <table>
        <tr>
          <th>DELETE</th>
          <th>TRUNCATE</th>
        </tr>
        <tr>
          <td>Puede incluir una cláusula WHERE.</td>
          <td>No admite cláusula WHERE.</td>
        </tr>
        <tr>
          <td>Registra en el log de transacciones.</td>
          <td>No se registra en el log de transacciones.</td>
        </tr>
        <tr>
          <td>Afecta registros específicos.</td>
          <td>Elimina todos los registros de la tabla.</td>
        </tr>
        <tr>
          <td>Compatible con claves foráneas.</td>
          <td>No se puede usar si hay claves foráneas.</td>
        </tr>
      </table>
      <h3 id="3.4.0">3.4.0 LOCK (Bloqueo de Tablas) </h3>
      <p>
        El comando LOCK permite bloquear tablas para evitar modificaciones
        mientras se ejecutan transacciones.
      </p>
      <div className="codigo">
        LOCK TABLES empleados WRITE;
        <br />
        <Esp />
        UPDATE empleados <br />
        <Esp />
        SET salario = 5000 <br />
        <Esp />
        WHERE puesto = 'Desarrollador'; <br />
        UNLOCK TABLES;
      </div>
    </article>
  );
};

export { Modulo3 };
