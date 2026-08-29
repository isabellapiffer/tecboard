import "./estiloformulariodeevento.css"

import { TituloFormulario } from "../TituloFormulario";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { Label } from "../Label";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { BotaoCriarEvento } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento({ temas, aoSubmeter }) {

  function aoFormSubmetido(formData) {
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id ==formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento') + 'T00:00:00'),
      titulo: formData.get("nome")
    }
    aoSubmeter(evento)
  }
  
  return (
    <>
      <form className="form-evento" action={aoFormSubmetido}>
        <TituloFormulario>Preencha para criar um evento:</TituloFormulario>

    <div className="campos"> 
      
        <CampoDeFormulario>
          <Label htmlFor="nome">Qual é o nome do evento?</Label>
          <CampoDeEntrada type="text" id="nome" name="nome" placeholder="Summer dev hits" />
        </CampoDeFormulario>

         <CampoDeFormulario>
          <Label htmlFor="capa">Qual o endereço da imagem de capa?</Label>
          <CampoDeEntrada type="text" id="capa" name="capa" placeholder="http://..." />
        </CampoDeFormulario>

         <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>

         <CampoDeFormulario>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas}/>
         </CampoDeFormulario>
        
      
      </div>

      <div className="acoes">
                <BotaoCriarEvento>Criar evento </BotaoCriarEvento>
      </div>

       
      </form>
    </>
  );
}
