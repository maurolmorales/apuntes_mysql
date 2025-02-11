import { Esp } from "../components/espacio";
const Modulo4 = () => {
  return (
    <article id="modulo-4">
      <div className="h2-topBar">
        <h2> Módulo 4: DQL {"(Data Query Language)"} </h2>

        <a href="#indice">al Indice</a>
      </div>
      <p>
        El Data Query Language (DQL) se centra exclusivamente en consultar y
        recuperar datos almacenados en las tablas de una base de datos. El
        comando principal de este lenguaje es SELECT, el cual permite realizar
        consultas simples y complejas.
      </p>

      <h3>SELECT</h3>
      <h4>SELECT </h4>
      <p>El comando SELECT permite recuperar datos de una tabla.</p>

      <div className="codigo">
        SELECT columna1, columna2, ... FROM nombre_tabla;
      </div>
      <div className="codigo">
        SELECT nombre, puesto, salario FROM empleados;
      </div>
      <p>Seleccionar todas las columnas:</p>
      <div className="codigo">SELECT * FROM empleados;</div>
      <p>
        La cláusula WHERE se utiliza para filtrar registros según una condición.
      </p>
      <div className="codigo">
        SELECT nombre, salario FROM empleados WHERE salario {">"} 3000;
      </div>

      <h4> SELECT DISTINCT </h4>
      <p>
        En SQL, la cláusula SELECT DISTINCT se utiliza para eliminar los
        registros duplicados de un conjunto de resultados. Esto significa que
        solo se devolverán valores únicos en la columna especificada en la
        consulta. Se aplica a una o más columnas en la consulta. Elimina todas
        las filas duplicadas basadas en los valores únicos de las columnas
        seleccionadas. Es útil cuando deseas obtener una lista única de valores
        de una columna o un conjunto de columnas en una tabla.
      </p>
      <div className="codigo">
        -- Seleccionar una lista única de departamentos de la tabla empleados{" "}
        <br />
        SELECT DISTINCT departamento_id FROM empleados;
      </div>

      <h5>Operadores comunes en WHERE:</h5>
      <div className="table" >
        <div className="tr" >
          <div className="th" >Operador</ div>
          <div className="th" >Descripción</ div>
          <div className="th" >Ejemplo</ div>
        </ div>
        <div className="tr" >
          <div className="td" >= </ div>
          <div className="td" >Igual</ div>
          <div className="td" >WHERE puesto = 'Gerente'</ div>
        </ div>
        <div className="tr" >
          <div className="td" >{">"} </ div>
          <div className="td" >Mayor que </ div>
          <div className="td" >WHERE salario {">"} 5000</ div>
        </ div>
        <div className="tr" >
          <div className="td" >{"<"} </ div>
          <div className="td" >Menor que </ div>
          <div className="td" >WHERE salario {"<"} 4000</ div>
        </ div>
        <div className="tr" >
          <div className="td" >BETWEEN </ div>
          <div className="td" >Entre dos valores inclusivos</ div>
          <div className="td" >WHERE salario BETWEEN 2000 AND 5000</ div>
        </ div>
        <div className="tr" >
          <div className="td" >LIKE </ div>
          <div className="td" >Comparación con patrones </ div>
          <div className="td" >WHERE nombre LIKE 'Ana%'</ div>
        </ div>
        <div className="tr" >
          <div className="td" >IN </ div>
          <div className="td" >Valores dentro de una lista</ div>
          <div className="td" >WHERE puesto IN ('Gerente', 'Analista')</ div>
        </ div>
      </ div>
      <br />
      <h4>Ordenamiento con ORDER BY</h4>
      <p>
        El comando ORDER BY se utiliza para ordenar los resultados de una
        consulta en función de una o más columnas. Puedes ordenar los datos en
        orden ascendente (ASC, que es el valor predeterminado) o orden
        descendente (DESC). Debe colocarse siempre al final de una consulta,
        después de WHERE, GROUP BY y/o HAVING. Si no se especifica ASC o DESC,
        el orden predeterminado es ascendente. Puede usarse junto con funciones
        de agregación (COUNT, SUM, etc.) para ordenar por valores calculados.
      </p>
      <div className="codigo">
        SELECT columna1, columna2, ... FROM tabla ORDER BY columna1 [ASC|DESC],
        columna2 [ASC|DESC];
      </div>

      <h4>GROUP BY y Funciones de Agregación</h4>
      <p>
        La cláusula GROUP BY agrupa los resultados de una consulta según una o
        más columnas. Funciones de agregación comunes:
      </p>

      <div className="table" >
        <div className="tr" >
          <div className="th" > Función </ div>
          <div className="th" > Descripción </ div>
          <div className="th" > Ejemplo </ div>
        </ div>
        <div className="tr" >
          <div className="td" > COUNT() </ div>
          <div className="td" > Cuenta registros </ div>
          <div className="td" > SELECT COUNT(*) </ div>
        </ div>
        <div className="tr" >
          <div className="td" > SUM() </ div>
          <div className="td" > Suma valores de una columna </ div>
          <div className="td" > SELECT SUM(salario) </ div>
        </ div>
        <div className="tr" >
          <div className="td" > AVG() </ div>
          <div className="td" > Promedio de valores </ div>
          <div className="td" > SELECT AVG(salario) </ div>
        </ div>
        <div className="tr" >
          <div className="td" > MAX() </ div>
          <div className="td" > Valor máximo </ div>
          <div className="td" > SELECT MAX(salario) </ div>
        </ div>
        <div className="tr" >
          <div className="td" > MIN() </ div>
          <div className="td" > Valor mínimo </ div>
          <div className="td" > SELECT MIN(salario) </ div>
        </ div>
      </ div>
      <div className="codigo">
        SELECT puesto, COUNT(*) AS cantidad_empleados <br />
        FROM empleados <br />
        GROUP BY puesto;
      </div>

      <h4>GROUP_CONCAT, GROUPING SET</h4>
      <p>
        En SQL, las funciones GROUP_CONCAT() y GROUPING SETS se utilizan para
        realizar operaciones avanzadas de agregación y agrupamiento de datos.
      </p>

      <ul>
        <li>
          GROUP_CONCAT(): Se utiliza para concatenar los valores de una columna
          en una sola cadena, separados por un delimitador especificado. Esta
          consulta devuelve una lista de empleados en cada departamento, con los
          nombres de los empleados concatenados en una sola cadena separada por
          comas:
          <div className="codigo">
            SELECT departamento, GROUP_CONCAT(nombre_empleado SEPARATOR ', ') AS
            empleados FROM empleados GROUP BY departamento;
          </div>
        </li>
        <li>
          GROUPING SETS: se utiliza para especificar múltiples conjuntos de
          columnas para agrupar los datos y calcular agregados para cada
          conjunto. Esta consulta calcula el salario total por departamento y el
          salario total por cada empleado, utilizando la cláusula GROUPING SETS
          para especificar múltiples niveles de agrupamiento. Estas funciones
          son útiles para realizar operaciones avanzadas de agregación y
          agrupamiento en conjun‐ tos de datos complejos en SQL:
          <div className="codigo">
            SELECT departamento, nombre_empleado, SUM(salario) AS salario_total
            FROM empleados GROUP BY GROUPING SETS ((departamento),
            (nombre_empleado));
          </div>
        </li>
      </ul>

      <h4>Filtrar grupos con HAVING:</h4>
      <p>
        En SQL, la cláusula HAVING se utiliza junto con la cláusula GROUP BY
        para filtrar los resultados agrega‐ dos basados en condiciones
        específicas. El HAVING actúa como filtro para las funciones agregadas,
        como una especie de where. La cláusula HAVING se coloca después de la
        cláusula GROUP BY en una consulta y permite aplicar con‐ diciones a los
        resultados agregados
      </p>
      <div className="fRow">
        <div className="codigo">
          SELECT puesto, AVG(salario) AS salario_promedio <br />
          FROM empleados <br />
          GROUP BY puesto <br />
          HAVING salario_promedio {">"} 3000;
        </div>
        <div className="codigo">
          SELECT departamento, COUNT(*) AS cantidad_empleados <br />
          FROM empleados <br />
          GROUP BY departamento <br />
          HAVING COUNT(*) {">"} 5;
        </div>
      </div>

      <h4> UNION</h4>
      <p>
        El operador UNION en SQL se utiliza para combinar los resultados de dos
        o más consultas en un único conjunto de resultados. Es útil cuando
        necesitas juntar información de diferentes tablas o consultas
        relacionadas en una única salida.
      </p>
      <div className="fRow">
        <div className="codigo">
          SELECT columna1, columna2, ... <br />
          FROM tabla1 <br />
          UNION <br />
          SELECT columna1, columna2, ... <br />
          FROM tabla2;
        </div>
        <div className="codigo">
          (SELECT columna1, columna2, ... <br />
          FROM tabla1 <br />
          WHERE condicion1) <br />
          UNION <br />
          (SELECT columna1, columna2, ... <br />
          FROM tabla2 <br />
          WHERE condicion2);
        </div>
      </div>
      <ul>
        <li>
          Elimina duplicados por defecto: Cuando combinas resultados con UNION,
          los registros duplicados en las consultas combinadas se eliminan
          automáticamente. Si quieres incluir duplicados, usa UNION ALL.
        </li>
        <li>
          Compatibilidad de columnas: Todas las consultas deben tener el mismo
          número de columnas. Las columnas correspondientes deben tener tipos de
          datos compatibles (o conversión implícita entre ellos).
        </li>
        <li>
          Ordenación de resultados: Puedes usar ORDER BY solo al final de la
          consulta combinada
        </li>
      </ul>

      <h4>JOIN (Combinar Tablas)</h4>
      <p>
        El operador JOIN en SQL se utiliza para combinar filas de dos o más
        tablas en función de una relación entre las columnas. Es esencial cuando
        deseas trabajar con datos distribuidos en varias tablas, vinculando
        información relevante según las relaciones definidas.
      </p>
      <ul>
        <li>
          INNER JOIN (el más común): Devuelve solo las filas que tienen
          coincidencias en ambas tablas.
          <div className="codigo">
            SELECT columnas FROM tabla1 <br />
            INNER JOIN tabla2 <br />
            ON tabla1.columna = tabla2.columna;
          </div>
        </li>
        <li>
          LEFT JOIN (o LEFT OUTER JOIN): Devuelve todas las filas de la tabla
          izquierda, y las coincidencias de la tabla derecha. Si no hay
          coincidencia, muestra NULL.
          <div className="codigo">
            SELECT columnas <br />
            FROM tabla1 <br />
            LEFT JOIN tabla2 <br />
            ON tabla1.columna = tabla2.columna;
          </div>
        </li>
        <li>
          RIGHT JOIN (o RIGHT OUTER JOIN): Devuelve todas las filas de la tabla
          derecha, y las coincidencias de la tabla izquierda. Si no hay
          coincidencia, muestra NULL.
          <div className="codigo">
            SELECT pedidos.id_pedido, clientes.nombre <br />
            FROM pedidos <br />
            RIGHT JOIN clientes <br />
            ON pedidos.id_cliente = clientes.id_cliente;
          </div>
        </li>
        <li>
          FULL OUTER JOIN: Devuelve todas las filas cuando hay coincidencias en
          una de las tablas o en ambas. Si no hay coincidencia, muestra NULL.
          <div className="codigo">
            SELECT pedidos.id_pedido, clientes.nombre <br />
            FROM pedidos <br />
            FULL OUTER JOIN clientes <br />
            ON pedidos.id_cliente = clientes.id_cliente;
          </div>
        </li>
        <li>
          CROSS JOIN: Devuelve el producto cartesiano de ambas tablas (todas las
          combinaciones posibles de filas).
          <div className="codigo">
            SELECT clientes.nombre, productos.nombre_producto <br />
            FROM clientes <br />
            CROSS JOIN productos;
          </div>
        </li>
      </ul>
      <h5>Errores comunes con JOIN:</h5>
      <ul>
        <li>
          Olvidar la condición ON: Esto puede generar combinaciones erróneas o
          incluso el producto cartesiano si se usa mal.
        </li>
        <li>
          Ambigüedad de columnas: Si ambas tablas tienen columnas con el mismo
          nombre, debes calificarlas con el nombre de la tabla.
        </li>
        <li>
          Falta de índices: Consultas con JOIN pueden ser lentas si las columnas
          usadas en la condición ON no tienen índices adecuados.
        </li>
      </ul>
      <br />
      <h4>OFFSET</h4>
      <p>
        Además de especificar el límite de filas, también puedes utilizar LIMIT
        junto con OFFSET para omitir un número específico de filas antes de
        devolver el resultado. Esto puede ser útil para la paginación de
        resultados, donde deseas mostrar una página específica de resultados.
      </p>
      <div className="codigo">
        SELECT columnas FROM tabla <br />
        LIMIT cantidad_de_filas <br />
        OFFSET numero_de_filas_a_omitir;
      </div>

      <h4>SUBCONSULTAS</h4>
      <p>
        Las subconsultas son consultas anidadas dentro de otra consulta. Ejemplo
        de subconsulta simple:
      </p>
      <div className="codigo">
        SELECT nombre, salario <br />
        FROM empleados <br />
        WHERE salario {">"} (SELECT AVG(salario) FROM empleados);
      </div>
      <p>Subconsultas en la cláusula FROM:</p>
      <div className="codigo">
        SELECT departamento, salario_promedio <br />
        FROM (SELECT id_departamento, AVG(salario) AS salario_promedio <br />
        FROM empleados <br />
        GROUP BY id_departamento) AS promedio_por_departamento;
      </div>

      <h4>LIMIT (Restringir Resultados)</h4>
      <p>
        El comando LIMIT restringe el número de registros devueltos por una
        consulta. Sintaxis básica:
      </p>
      <div className="codigo">
        SELECT columna1, columna2 FROM nombre_tabla LIMIT número_registros;
      </div>

      <div className="codigo">
        SELECT nombre, salario FROM empleados ORDER BY salario DESC LIMIT 5;
      </div>

      <h4>EXPLAIN y Optimización de Consultas</h4>
      <p>
        El comando EXPLAIN permite analizar cómo se ejecuta una consulta SQL, lo
        que es útil para optimizar el rendimiento.
      </p>
      <div className="codigo">
        EXPLAIN SELECT * FROM empleados WHERE salario {"> "}4000;
      </div>

      <h4>Uso de Alias en Consultas SQL</h4>
      <p>
        Los alias son nombres alternativos que se pueden asignar a columnas o
        tablas en consultas SQL para ha‐ cer que el código sea más legible y
        conciso. Aquí hay algunas formas comunes de usar alias en consultas SQL
      </p>
      <ul>
        <li>
          Alias de Columna: Puedes asignar alias a columnas en la lista SELECT
          para cambiar el nombre de la columna resultante. Esto es útil para
          proporcionar nombres más descriptivos o para abreviar nom‐ bres
          largos. Por ejemplo:
          <div className="codigo">
            SELECT nombre AS nombre_cliente, edad AS edad_cliente FROM clientes;
          </div>
        </li>
        <li>
          Alias de Tabla: Puedes asignar alias a tablas en la cláusula FROM para
          abreviar el nombre de la ta‐ bla y hacer que la consulta sea más
          legible. Esto es especialmente útil cuando se unen varias tablas. Por
          ejemplo:
          <div className="codigo">
            SELECT c.nombre, o.fecha FROM clientes AS c JOIN ordenes AS o ON
            c.id_cliente = o.id_cliente;
          </div>
        </li>
        <li>
          Alias de Tabla en Subconsultas: En subconsultas, también puedes
          asignar alias a tablas tempora‐ les creadas por la subconsulta. Esto
          ayuda a referirse a la tabla dentro de la subconsulta. Por ejemplo:
          <div className="codigo">
            SELECT * FROM (SELECT id_cliente, SUM(total) AS total_ventas FROM
            ventas GROUP BY id_cliente) AS resumen_ventas WHERE total_ventas
            &gt; 1000;
          </div>
        </li>
      </ul>

      <h4> Uso del operador EXISTS</h4>
      <p>
        El operador EXISTS se utiliza en SQL para verificar si un subquery
        (subconsulta) devuelve algún registro. Es una herramienta poderosa para
        trabajar con datos relacionales, especialmente cuando necesitas
        comprobar la existencia de datos relacionados sin importar el contenido
        específico de esos datos. EXISTS devuelve un valor booleano (TRUE o
        FALSE): Si la subconsulta genera al menos un registro, EXISTS devuelve
        TRUE. Si la subconsulta no genera registros, EXISTS devuelve FALSE.
        EXISTS no evalúa los datos específicos de la subconsulta: Solo verifica
        si la subconsulta genera filas. No importa qué columnas ni valores
        contiene. EXISTS no requiere que la subconsulta devuelva columnas
        específicas; puedes usar SELECT 1, SELECT *, o cualquier otra expresión
        válida. Es una herramienta excelente para mejorar la legibilidad y
        eficiencia en ciertas consultas, especialmente cuando trabajas con
        tablas relacionadas.
      </p>
      <div className="codigo">
        SELECT columnas <br />
        FROM tabla <br />
        WHERE EXISTS (subquery);
      </div>
      <p>Ejemplos prácticos:</p>
      <ol>
        <li>
          Comprobar si una tabla tiene datos relacionados: Supongamos que tienes
          una tabla empleados y otra tabla departamentos. Queremos obtener todos
          los departamentos que tienen al menos un empleado. La subconsulta
          verifica si hay al menos un registro en la tabla empleados con el
          mismo id_departamento.
          <div className="codigo">
            SELECT nombre_departamento <br />
            FROM departamentos <br />
            WHERE EXISTS ( <br />
            <Esp /> SELECT 1 <br />
            <Esp /> FROM empleados <br />
            <Esp /> WHERE empleados.id_departamento =
            departamentos.id_departamento );
          </div>
        </li>
        <li>
          Filtrar registros según la existencia de relaciones: Queremos listar
          todos los clientes que tienen pedidos registrados en la tabla pedidos.
          <div className="codigo">
            SELECT nombre_cliente FROM clientes <br />
            WHERE EXISTS ( <br />
            <Esp /> SELECT 1 <br />
            <Esp /> FROM pedidos <br />
            <Esp /> WHERE pedidos.id_cliente = clientes.id_cliente );
          </div>
        </li>
      </ol>

      <h5>Comparación entre EXISTS y otras técnicas:</h5>
      <p>
        EXISTS vs. IN: <br />
        EXISTS es generalmente más eficiente cuando trabajas con subconsultas
        grandes, porque puede detenerse en cuanto encuentra el primer registro
        que cumple la condición. IN evalúa todos los valores devueltos por la
        subconsulta, lo que puede ser más lento en algunos casos.
      </p>
      <br />
      <div className="fRow">
        <div>
          <p>Ejemplo con EXISTS:</p>
          <div className="codigo">
            SELECT nombre_producto <br />
            FROM productos <br />
            WHERE EXISTS ( SELECT 1 FROM pedidos <br />
            <Esp /> WHERE pedidos.id_producto = productos.id_producto );
          </div>
        </div>
        <div>
          <p>Ejemplo equivalente con IN:</p>
          <div className="codigo">
            SELECT nombre_producto <br />
            FROM productos <br />
            WHERE id_producto IN ( <br />
            <Esp /> SELECT id_producto <br />
            <Esp /> FROM pedidos );
          </div>
        </div>
      </div>
      <h4>NOT EXISTS</h4>
      <p>
        La cláusula NOT EXISTS es lo opuesto a EXISTS. Devuelve verdadero si la
        subconsulta no devuelve nin‐ gún registro y falso si la subconsulta
        devuelve uno o más registros. Se utiliza para filtrar las filas según la
        falta de coincidencias en la subconsulta.
      </p>
      <div className="codigo">
        SELECT nombre <br />
        FROM empleados <br />
        WHERE NOT EXISTS (SELECT * FROM evaluaciones WHERE
        evaluaciones.empleado_id = empleados.id);
      </div>
    </article>
  );
};
export { Modulo4 };
