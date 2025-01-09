import { Esp } from "../components/espacio";
const Modulo6 = () => {
  return (
    <article id="modulo-6">
      <div className="h2-topBar">
        <h2> Módulo 6: DCL {"(Data Control Language)"} </h2>
        <a href="#indice">al Indice</a>
      </div>
      <p>
        se utiliza para gestionar los permisos y la seguridad en una base de
        datos. Con los comandos DCL, puedes otorgar o revocar privilegios a los
        usuarios para realizar acciones específicas en las tablas, vistas,
        procedimientos almacenados, y otros objetos de la base de datos. Este
        módulo es esencial para garantizar el control de acceso y la seguridad
        de los datos en un entorno multiusuario.
      </p>

      <h3 id="6.0.0">6.0.0 GRANT (Otorgar Privilegios)</h3>
      <p>
        El comando GRANT otorga permisos a un usuario o rol para realizar
        acciones específicas en la base de datos.
      </p>

      <div className="codigo">
        GRANT privilegios ON objeto TO usuario [WITH GRANT OPTION];
      </div>
      <p>Parámetros:</p>
      <ul>
        <li>
          privilegios: La acción permitida (e.g., SELECT, INSERT, UPDATE,
          DELETE, ALL PRIVILEGES).
        </li>
        <li>
          objeto: La tabla, vista, o procedimiento sobre la que se otorgan
          permisos.
        </li>
        <li>usuario: El usuario o rol que recibirá los privilegios.</li>
        <li>
          WITH GRANT OPTION: Permite al usuario otorgar los mismos privilegios a
          otros usuarios.
        </li>
      </ul>
      <p>ejemplo:</p>
      <ol>
        <li>
          Otorgar permisos de lectura y escritura en una tabla:
          <div className="codigo">
            GRANT SELECT, INSERT ON productos TO 'usuario1'@'localhost';
          </div>
        </li>
        <li>
          Otorgar todos los privilegios sobre una base de datos:
          <div className="codigo">
            GRANT ALL PRIVILEGES ON tienda.* TO 'admin'@'%';
          </div>
        </li>
        <li>
          Permitir que el usuario otorgue los privilegios a otros:
          <div className="codigo">
            GRANT SELECT ON ventas TO 'user2'@'localhost' WITH GRANT OPTION;
          </div>
        </li>
      </ol>

      <h3 id="6.1.0">6.1.0 REVOKE (Revocar Privilegios)</h3>
      <p>
        El comando REVOKE elimina permisos previamente otorgados a un usuario o
        rol. Los privilegios revocados se eliminan inmediatamente. Si el usuario
        no tiene el privilegio especificado, el comando no tiene efecto.
      </p>
      <div className="codigo">REVOKE privilegios ON objeto FROM usuario;</div>

      <p>parametros: </p>
      <ul>
        <li>
          privilegios: El permiso que se desea eliminar (e.g., SELECT, INSERT,
          UPDATE, etc.).
        </li>
        <li>
          objeto: La tabla, vista o procedimiento del cual se revocarán los
          permisos.
        </li>
        <li>usuario: El usuario o rol que perderá los privilegios.</li>
      </ul>

      <p>ejemplo: </p>
      <ol>
        <li>
          Revocar privilegios específicos:
          <div className="codigo">
            REVOKE INSERT ON productos FROM 'usuario1'@'localhost';
          </div>
        </li>
        <li>
          Revocar todos los privilegios sobre una base de datos:
          <div className="codigo">
            REVOKE ALL PRIVILEGES ON tienda.* FROM 'admin'@'%';
          </div>
        </li>
      </ol>
      <h4> Gestión de Roles</h4>
      <p>
        En sistemas de bases de datos modernos, se pueden usar roles para
        agrupar permisos y simplificar la administración.
      </p>

      <p> Crear un rol:</p>
      <div className="codigo"> CREATE ROLE gestor_ventas;</div>
      <p>Asignar privilegios a un rol: </p>
      <div className="codigo">
        GRANT SELECT, INSERT, UPDATE ON ventas TO gestor_ventas;
      </div>
      <p>Asignar un rol a un usuario: </p>
      <div className="codigo">
        GRANT gestor_ventas TO 'usuario1'@'localhost';
      </div>
      <p> Revocar un rol de un usuario:</p>
      <div className="codigo">
        REVOKE gestor_ventas FROM 'usuario1'@'localhost';
      </div>
      <p>
        Activar un rol: <br />
        Los roles no se activan automáticamente. Para utilizarlos, el usuario
        debe activarlo explícitamente.
      </p>
      <div className="codigo"> SET ROLE gestor_ventas;</div>

      <h4>Estrategias Básicas de Seguridad</h4>
      <ol>
        <li>
          Principio de menor privilegio: Asigna a cada usuario solo los
          privilegios mínimos necesarios para realizar su trabajo.
          <div className="codigo">
            GRANT SELECT ON empleados TO 'analista'@'localhost';
          </div>
        </li>
        <li>
          Separación de roles: Divide los privilegios en roles específicos
          (e.g., administrador, analista, gerente).
        </li>
        <li>
          Uso de contraseñas seguras: Configura contraseñas seguras para todos
          los usuarios.
          <div className="codigo">
            ALTER USER 'usuario1'@'localhost' IDENTIFIED BY
            'NuevaContraseñaFuerte123!';
          </div>
        </li>
        <li>
          Revocación periódica: Revisa y revoca privilegios no utilizados.
        </li>
      </ol>
    </article>
  );
};
export { Modulo6 };
