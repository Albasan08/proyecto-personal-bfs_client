// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

export const useCrearExperienciaAdmin = () => {

    const crearExperiencia = async (formData) => {
      //console.log(formData)
      // Conexión con la BBDD mediante el back
      const respuesta = await fetch(`${APIKEY_BACK}admin/crear`, {
        method: "POST",
        credentials: "include",
        body: formData
      });
        
      const data = await respuesta.json();
      //console.log(data);
      return data;
    };

  return (
    {
        crearExperiencia
    }
  )
}
