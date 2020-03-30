#Instalar

composer require barryvdh/laravel-dompdf
#Añadir

Después de actualizar Composer, agregue ServiceProvider a la matriz de proveedores en config / app.php

Barryvdh\DomPDF\ServiceProvider::class,
Opcionalmente, puede usar la fachada para un código más corto. Agregue esto a sus fachadas:

'PDF' => Barryvdh\DomPDF\Facade::class,
#Ejemplo

public function pdfvehiculo($id){

    $vehiculo = VehiculoMaquinaria::where('id', $id)->get();

    foreach ($vehiculo as $item) {
        $data = [
            'id'                        => $item->id,
            'tipo_equipo'               => $item->tipo_equipo,
            'codigo_interno'            => $item->codigo_interno,
            'marca'                     => $item->marca,
            'model'                     => $item->model,
            'patente'                   => $item->patente,
            'empresa'                   => $item->empresa,
            'revision_tecnica'          => $item->revision_tecnica,
            'soap'                      => $item->soap,
            'permiso_de_circulacion'    => $item->permiso_de_circulacion,
            'centro_de_costo_asignado'  => $item->centro_de_costo_asignado,
            'conductor'                 => $item->conductor,
        ];
    }

    $pdf = \PDF::loadView('vehiculos.pdfvehiculo', $data);
    return $pdf->download('QRvehiculo-'.$id.'.pdf');
}
#Ejemplo 2

public function seleccionadosPDF(Request $request){

    if($request->input('postulante')){
        $seleccionados = [];

        foreach ($request->input('postulante') as $id) {
            $user = User::find($id);
            array_push($seleccionados, $user);
        }

        $pdf = \PDF::loadView('admin.empleos.seleccionadosPDF', compact('seleccionados'));
        return $pdf->download('Postulantes.pdf');

    }else{
        return back()->with('status','¡Debes seleccionar a los postulantes!');
    }

}