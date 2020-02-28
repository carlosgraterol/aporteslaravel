#find($id)
	1. find($id) toma una identificación y devuelve un solo modelo. Si no existe un modelo coincidente, vuelve null.

#findOrFail($id)
	2. findOrFail($id) toma una identificación y devuelve un solo modelo. Si no existe un modelo coincidente, arroja un error 1 .

#first()
	3. first() devuelve el primer registro encontrado en la base de datos. Si no existe un modelo coincidente, vuelve null.

#firstOrFail()
	4. firstOrFail()devuelve el primer registro encontrado en la base de datos. Si no existe un modelo coincidente, arroja un error 1 .

#get()
	5. get() devuelve una colección de modelos que coinciden con la consulta.

#pluck($column)
	6. pluck($column)devuelve una colección de solo los valores en la columna dada. En versiones anteriores de Laravel se llamaba a este método lists.

#toArray()
	7. toArray() Convierte el modelo / colección en una simple matriz PHP.