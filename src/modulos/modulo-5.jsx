import { Esp } from "../components/espacio";
const Modulo5 = () => {
  return (
    <article id="modulo-5">
      <div className="h2-topBar">
        <h2> Módulo 4: TCL {"(Transaction Control Language)"}</h2>

        <a href="#indice">al Indice</a>
      </div>
      <p>
        Se utiliza para gestionar las transacciones en una base de datos. Las
        transacciones permiten agrupar varias operaciones SQL en una unidad
        lógica de trabajo, asegurando la integridad y consistencia de los datos.
        Este módulo explica cómo funcionan las transacciones y cómo utilizarlas
        para mantener la confiabilidad en sistemas de bases de datos.
      </p>
      <h3 id="5.0.0">5.0.0 ¿Qué es una transacción?</h3>
      <p>
        Una transacción es un conjunto de operaciones SQL que se ejecutan como
        una unidad lógica. Las transacciones siguen las propiedades ACID:
      </p>
      <div className="table" >
        <div className="tr" >
          <div className="th" > Propiedad </ div>
          <div className="th" > Descripción</ div>
        </ div>
        <div className="tr" >
          <div className="td" > Atomicidad</ div>
          <div className="td" > Todas las operaciones se completan o ninguna se aplica. </ div>
        </ div>
        <div className="tr" >
          <div className="td" > Consistencia </ div>
          <div className="td" >
            La base de datos pasa de un estado válido a otro tras una
            transacción.
          </ div>
        </ div>
        <div className="tr" >
          <div className="td" >Aislamiento </ div>
          <div className="td" >
            Las transacciones concurrentes no afectan el resultado entre sí.
          </ div>
        </ div>
        <div className="tr" >
          <div className="td" > Durabilidad </ div>
          <div className="td" >
            Una vez que una transacción se confirma (COMMIT), los cambios son
            permanentes.
          </ div>
        </ div>
      </ div>
      <h4>Ejemplo de transacción:</h4>
      <p>
        Supongamos que estás transfiriendo dinero entre cuentas: <br />
        Resta dinero de la cuenta A. <br />
        Suma dinero a la cuenta B. <br />
        Ambas operaciones deben realizarse juntas, o ninguna debe aplicarse.
      </p>

      <h3 id="5.1.0">5.1.0 COMMIT</h3>
      <p>
        El comando COMMIT guarda de forma permanente los cambios realizados por
        una transacción. Los cambios realizados antes del COMMIT son visibles
        solo dentro de la transacción actual. Una vez confirmado, los cambios no
        se pueden deshacer.
      </p>
      <div className="codigo">COMMIT;</div>
      <div className="codigo">
        START TRANSACTION; <br />
        UPDATE cuentas SET saldo = saldo - 100 WHERE id_cuenta = 1; <br />
        UPDATE cuentas SET saldo = saldo + 100 WHERE id_cuenta = 2; <br />
        COMMIT;
      </div>

      <h3 id="5.2.0">5.2.0 ROLLBACK {"(Deshacer Transacción)"}</h3>
      <p>
        El comando ROLLBACK revierte los cambios realizados por una transacción,
        devolviendo los datos al estado anterior. Los cambios realizados tras un
        ROLLBACK no son visibles. Útil para manejar errores durante la ejecución
        de una transacción.
      </p>
      <div className="codigo">ROLLBACK;</div>
      <div className="codigo">
        START TRANSACTION; <br />
        UPDATE cuentas SET saldo = saldo - 100 WHERE id_cuenta = 1; <br />
        UPDATE cuentas SET saldo = saldo + 100 WHERE id_cuenta = 2; <br />
        -- Ocurre un error, deshacemos la transacción <br />
        ROLLBACK;
      </div>

      <h3 id="5.3.0">5.3.0 SAVEPOINT {"(Punto de Control)"}</h3>
      <p>
        El comando SAVEPOINT crea un punto dentro de una transacción al que
        puedes volver usando ROLLBACK. Puedes definir múltiples SAVEPOINT dentro
        de una transacción. Usar ROLLBACK TO nombre_punto no afecta los cambios
        anteriores al punto guardado.
      </p>

      <div className="codigo">SAVEPOINT nombre_punto;
      </div>
      <div className="codigo">
        START TRANSACTION; <br />
        UPDATE cuentas SET saldo = saldo - 100 WHERE id_cuenta = 1; <br />
        SAVEPOINT punto1; <br />
        UPDATE cuentas SET saldo = saldo + 100 WHERE id_cuenta = 2; <br />
        ROLLBACK TO punto1; -- Deshacemos solo hasta el punto1 <br />
        COMMIT;
      </div>

      <h3 id="5.4.0">5.4.0 SET Transaction {"(Configurar Transacción)"}</h3>
      <p>
        El comando SET TRANSACTION configura las características de una
        transacción, como el nivel de aislamiento. Los niveles de aislamiento
        afectan el rendimiento y la consistencia. Configura el nivel adecuado
        según las necesidades de tu aplicación. Niveles de aislamiento:
      </p>
      <div className="table" >
        <div className="tr" >
          <div className="th" > Nivel </ div>
          <div className="th" > Descripción </ div>
        </ div>
        <div className="tr" >
          <div className="td" > READ UNCOMMITTED </ div>
          <div className="td" > Permite leer datos no confirmados por otras transacciones.</ div>
        </ div>
        <div className="tr" >
          <div className="td" > READ COMMITTED </ div>
          <div className="td" > Permite leer solo datos confirmados. </ div>
        </ div>
        <div className="tr" >
          <div className="td" > REPEATABLE READ </ div>
          <div className="td" >
            Garantiza que los datos leídos no cambien durante la transacción.
          </ div>
        </ div>
        <div className="tr" >
          <div className="td" > SERIALIZABLE </ div>
          <div className="td" >
            Aislamiento completo; las transacciones se ejecutan como si fueran
            secuenciales.
          </ div>
        </ div>
      </ div>
      <div className="codigo">
        SET TRANSACTION ISOLATION LEVEL REPEATABLE READ; <br />
        START TRANSACTION; <br />
        SELECT saldo FROM cuentas WHERE id_cuenta = 1; <br />
        UPDATE cuentas SET saldo = saldo - 100 WHERE id_cuenta = 1; <br />
        COMMIT;
      </div>

      <h4>Transacciones Implícitas vs. Explícitas</h4>

      <ul>
        <li>
          Transacciones Implícitas: Algunos comandos, como CREATE o DROP, son
          transacciones implícitas, lo que significa que se confirman
          automáticamente.
        </li>

        <li>
          Transacciones Explícitas: Debes iniciarlas manualmente con START
          TRANSACTION. Ejemplo de transacciones explícitas:
          <div className="codigo">
            START TRANSACTION; <br />
            DELETE FROM empleados WHERE id_empleado = 10; <br />
            ROLLBACK;
          </div>
        </li>
      </ul>
    </article>
  );
};
export { Modulo5 };
