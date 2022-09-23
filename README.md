- ¿Qué diferencias hay entre bases de datos no relacionales y relacionales?

Las bases de datos no relacionales son un sistema de almacenamiento de información que se caracteriza por no usar el lenguaje SQL para las consultas y demas, no trabajan con estructuras definidas, la información no se almacena en tablas sino a través de documentos, y la información tampoco se organiza en registros o campos, tienen una gran escalabilidad y están pensadas para la gestión de grandes volúmenes de datos. Por otro lado, a diferencia de las bases de datos relacionales no cumple con el estándar ACID de atomicidad, consistencia, aislamiento y durabilidad.
En las bases de datos relacionales la información se organiza de forma estructurada en tablas; en las no relacionales no es así.
Las bases de datos no relacionales se emplean sobre todo para almacenar datos no estructurados o semiestructurados.
La escalabilidad es mayor en una base de datos no relacional, y también están preparadas para soportar mayor volumen de datos.
Las bases de datos no relacionales o NoSQL también ofrecen una mayor flexibilidad y escalabilidad horizontal.
A diferencia de las relacionales, las bases de datos no relacionales todavía no disponen de un lenguaje estandarizado (SQL).
El soporte de la comunidad es mejor en el caso de las bases no relacionales.

- ¿Qué diferencias hay entre JWT y cookies, qué ventajas da cada uno?




- ¿Para qué sirve el protocolo OAuth?

OAuth hoy en día permite la autorización segura mediante el uso de un API. En la actualidad se usa su versión OAuth 2.0, sus mejoras proporciona flujos de autorización para aplicaciones web, de escritorio y teléfonos móviles. Actualmente servicios como Google, Facebook, Azure Active Directory, Github solo admiten el protocolo OAuth 2.0 que es un framework de autorización, que lo que hace es permitir que las aplicaciones obtengan acceso limitado a las cuentas de usuario de algunos servicios mencionados anteriormente. Su funcionamiento es delegar el permiso de autenticación del usuario al servicio que gestiona dichas cuentas, de modo que es el propio servicio el que otorga acceso a las aplicaciones de terceros. En el protocolo OAuth se podría definir roles Cliente, Usuario y Servidor.