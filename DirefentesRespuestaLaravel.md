#find($id)

	find($id) toma una identificación y devuelve un solo modelo. Si no existe un modelo coincidente, vuelve null.

#findOrFail($id)

	findOrFail($id) toma una identificación y devuelve un solo modelo. Si no existe un modelo coincidente, arroja un error 1 .

#first()

	first() devuelve el primer registro encontrado en la base de datos. Si no existe un modelo coincidente, vuelve null.

#firstOrFail()

	firstOrFail()devuelve el primer registro encontrado en la base de datos. Si no existe un modelo coincidente, arroja un error 1 .

#get()

	get() devuelve una colección de modelos que coinciden con la consulta.

#pluck($column)

	pluck($column)devuelve una colección de solo los valores en la columna dada. En versiones anteriores de Laravel se llamaba a este método lists.

#toArray()

	toArray() Convierte el modelo / colección en una simple matriz PHP.