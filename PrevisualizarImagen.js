        /** -- Precargar imagen-- **/
        function readURL(input) {
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = e => {
                  // Asignamos el atributo src a la tag de imagen
                  $('#imgpre').attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#avatar_empre").change(function() {
            readURL(this);
        });
