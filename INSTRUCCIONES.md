Este proyecto es un poco diferente a los que normalmente hacemos, en este proyecto vamos a usar archivos altamente configurables y parametrizados,
ya que antes no habiamos manejados roles, en este proyecto los componentes principales van a tener que ser muy bien manejados, para que sean super flexibles y no haya que hacer reglas hardcodeadas,
ejemplo:

existe una carpeta llamada config, dentro de esta carpeta esta la configuracion de rutas de cada tipo de usuario,
estan divididas por modulos,

coordinador 
    -> memorias
        -> rutas
    -> agenda
        -> rutas
    -> docente
        -> rutas

la idea es que si se quiere agregar algo al paquete entonces solamente haya que configurar en ese archivo el nombre de la ruta, el icono que usa esa herramienta y el componente que se debe mostrar cuando la ruta es abierta

la idea es solamente tener que desarrollar los componentes y sus logicas internas
luego pasar ese componente a la config y ya funcionaria la pagina

para hacer navegacion a mayor nivel, se haran con rutas embebidas en los componentes que creamos, asi la navegacion es interna del componente y no es declarada de forma superficial,
asi no interviene con la navegacion de la app global