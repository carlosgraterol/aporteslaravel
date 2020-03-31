#SALTOS DE PÁGINA
	
	#Primer paso
	
	<style>
		.page-break {
		    page-break-after: always;
		}
	</style>
	
	#Segundo paso
	
	<div class="page-break"></div>


#ENUMERAR PÁGINAS

	#Primer paso
		php artisan vendor:publish --provider="Barryvdh\DomPDF\ServiceProvider"

	#Segundo paso
		"enable_php" => true, // Por defecto esta en false

	#Tercer paso
	
		//PDF VERTICAL SIN FOOTER

		<script type="text/php">
	        if ( isset($pdf) ) {
	            $pdf->page_script('
	                $font = $fontMetrics->get_font("Arial, Helvetica, sans-serif", "normal");
	                $pdf->text(270, 780, "Pág $PAGE_NUM de $PAGE_COUNT", $font, 10);
	            ');
	        }
		</script>

		//PDF VERTICAL

		<script type="text/php">
	        if ( isset($pdf) ) {
	            $pdf->page_script('
	                $font = $fontMetrics->get_font("Arial, Helvetica, sans-serif", "normal");
	                $pdf->text(270, 820, "Pág $PAGE_NUM de $PAGE_COUNT", $font, 10);
	            ');
	        }
	    	</script>


		//PDF HORIZONTAL

		<script type="text/php">
	        if ( isset($pdf) ) {
	            $pdf->page_script('
	                $font = $fontMetrics->get_font("Arial, Helvetica, sans-serif", "normal");
	                $pdf->text(370, 570, "Pág $PAGE_NUM de $PAGE_COUNT", $font, 10);
	            ');
	        }
	    	</script>
