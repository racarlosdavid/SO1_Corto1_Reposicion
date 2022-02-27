# SO1_Corto1_Reposicion
Reposición Examen Corto 1

# Instrucciomes
- modificar el endpoint /nota con el nombre del estudiante.
- agregar un dockerfile para dockerizar el backend
- crear la imagen del backend con el siguiente formato "USER-DOCKERHUB"/corto1_reposicion_"CARNET"
- hacer push a dockerhub u otro registry
- crear un archivo de docker-compose para levantar el backend

# Restricciones 
- en el endpoint /nota unicamente se debe modificar el nombre
- debe pasar el carnet y la nota por medio de varible de entorno en el archivo de docker-compose
- el contenedor este debe estar expuesto en el puerto 8080 del host

# Entregable en UEDi
- archivo docker-compose.yml que permita correr el contenedor 
