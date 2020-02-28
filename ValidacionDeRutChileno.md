#Primero

	composer require freshwork/chilean-bundle

#Registrar providers y aliases:
Registrar en config/app.php

	'providers' => [
	    ...
	    Freshwork\ChileanBundle\Laravel\ChileanBundleServiceProvider::class
	];


	'aliases' => [
	    ...
	    'Rut'   => Freshwork\ChileanBundle\Laravel\Facades\Rut::class
	];

#Importar la libreria donde se quiera usar

	use Freshwork\ChileanBundle\Rut;

#Ejemplo de Validacion

	...
	class ClientController extends Controller{
	    ...
	    use ValidateRequests;
	    ...
	    public function store(Request $request) {
	        $this->validate($request, [
	            'rut'   => 'required|cl_rut'
	        ]);
	    }
	}

#Documentacion: https://packagist.org/packages/freshwork/chilean-bundle
