import Title from '@/components/(wikipedia)/atoms/Title'

import '../Turismo.css'

const Turismo = () => {
    return (
        <div className="Turismo">
            <Title text="Turismo e imigração" />
            <div className='content'>
                <h2>Requisitos para entrar no pais</h2>

                <p>Os requisitos para a entrada no Brasil são poucos: basta somente do visto (quando necessário), da cédula de identidade e do passaporte. Porém o Ministério da Saúde também indica o esquema vacinal completo, contendo as vacinas contra:</p>
                <ul>
                    <li>Febre Amarela;</li>
                    <li>Sarampo;</li>
                    <li>Difteria;</li>
                    <li>Tétano;</li>
                    <li>Poliomielite;</li>
                    <li>Rubéola;</li>
                    <li>COVID, ou teste se não tiver esquema vacinal completo.</li>
                </ul>

                <h3>É preciso apresentar corretamente:</h3>

                <h4>Passaporte válido:</h4>
                <p>O passaporte precisa estar válido por pelo menos seis meses além da data planejada para a saída do Brasil.</p>

                <h4>Fotografias</h4>
                <p>É corriqueiro a necessidade de duas fotografias recentes, em formato padrão, com fundo branco e sem acessórios que possam atrapalhar ou interferir, como chapéus e óculos escuros.</p>

                <h4>Comprovante de pagamento da taxa de visto</h4>
                <p>É necessário pagar a taxa de visto, cujo valor pode variar dependendo da nacionalidade do requerente e do tipo de visto solicitado.</p>

                <h4>Comprovante de residência</h4>
                <p>Alguns tipos de visto podem exigir a apresentação do comprovante de residência do seu país de origem. O comprovante pode ser um contrato de aluguel, uma conta de serviços públicos ou outro documento oficial que comprove a veracidade do endereço do requerente.</p>

                <h4>Documentos específicos por tipo de visto</h4>
                <p>Dependendo do tipo de visto solicitado, podem ser exigidos documentos adicionais. Por exemplo, para o tipo de visto de negócios, é comum apresentar uma carta de convite da empresa brasileira, documentos relacionados a algum evento da empresa, ou de reuniões de negócio, comprovantes de atividades comerciais, entre outros.</p>

                <div className='box'>
                    <h4>Dica:</h4>
                    <p>Para evitar atrasos e estresse na obtenção do seu visto, é de suma importância preparar e enviar todos os documentos com antecedência, seguindo as instruções fornecidas pelo seu consulado ou embaixada.</p>
                </div>
            </div>

            <hr />

            <div className='content'>
                <h2>Tipos de visto:</h2>

                <p>O tipo de visto irá depender de qual a finalidade de sua viagem ao Brasil. A validade de cada visto varia de acordo com a categoria e de acordos governamentais.</p>

                <h4>Visto Eletrônico (e-Visa):</h4>
                <p>Uma opção para facilitar os que desejam visitar o Brasil e que sejam nacionais do: Canadá, Estados Unidos da América e Austrália é a opção de tirar o visto por meio digital por meio da plataforma oficial <a href='https://brazil.vfsevisa.com' target="_blank">(https://brazil.vfsevisa.com)</a></p>

                <h4>Visto de Visita (VIVIS)</h4>
                <p>O visto de visita será concedido ao nacional de outro país que viaje ao Brasil para estadas de até noventa dias, sem qualquer intuito imigratório ou de exercício de atividade remunerada, salvo a título de diária, ajuda de custo, cachê, pró-labore ou outras despesas com a viagem. O visto de visita poderá ser concedido para viagens com fins de turismo, negócios, trânsito, realização de atividades artísticas ou desportivas, estudo, trabalho voluntário, ou para participação em conferências, seminários, congressos ou reuniões, entre outras atividades, - desde que não haja recebimento de remuneração no Brasil e a estada não seja superior a noventa dias.</p>

                <h4>Visto Permanente</h4>
                <p>Para um estrangeiro conseguir morar permanentemente no Brasil, é preciso comprovar algum tipo de ligação com o país, como por exemplo, ter cônjuge de nacionalidade brasileira, ser filho de brasileiro, possuir uma união estável com brasileiro ou investir em negócios no Brasil.</p>

                <hr />

                <h3>Permanência com base no casamento com cônjuge brasileiro:</h3>

                <p>O Estatuto do Estrangeiro define que o estrangeiro que for casado com um brasileiro pode solicitar pela sua permanência definitiva no Brasil. É necessário, no entanto, que o estrangeiro esteja casado de fato e de direito com um brasileiro. O que significa que, além de ser um casamento válido, o casal precisa viver junto de forma efetiva.</p>
                <p>É comum que o casal receba a visita de agentes da Polícia Federal dentro de sua casa para que este requisito seja validado.</p>

                <h4>Documentos que devem ser apresentados:</h4>

                <ul>
                    <li>Formulário preenchido e assinado (encontrado no site do Ministério da Justiça ou em uma Unidade da Polícia Federal);</li>
                    <li>Comprovante do pagamento da taxa respectiva;</li>
                    <li>Declaração de que não cometeu crimes ou não foi processado tanto no Brasil como no exterior;</li>
                    <li>Declaração de que o casal não se encontram separados de fato ou de direito, assinada pelos requerentes, e com reconhecimento de firma;</li>
                    <li>Cópia autenticada e completa do passaporte;</li>
                    <li>Cópia da Certidão de Casamento brasileira;</li>
                    <li>Cópia autenticada da cédula de identidade brasileira do cônjuge;</li>
                </ul>

                <p>Caso o casamento tenha sido celebrado fora do Brasil, é necessário que seja então registrado ou transcrito no 1º Ofício de Registro Civil do Distrito Federal ou do domicílio do casal.</p>

                <h3>Permanência com base na união estável com brasileiro:</h3>

                <p>De acordo com o Conselho Nacional de Imigração, a permanência definitiva no Brasil também pode ser solicitada por pessoas que vivam em união estável, independente de sexo. <br /> A comprovação da união estável se dará por meio da apresentação do atestado de união estável emitido pelo órgão governamental do país de origem do requerente, ou, através de um documento de união estável que pode ser emitido por juízo competente no Brasil ou de autoridade correspondente no exterior.</p>

                <p><strong>Caso o casal não possua nenhum dos dois documentos acima, a comprovação da união estável poderá ser feita por meio de apresentação das seguintes opções;</strong></p>

                <ul>
                    <li>Certidão ou documento similar emitido por autoridade de registro civil nacional, ou equivalente estrangeiro;</li>
                    <li>Declaração, sob as penas da lei, de duas testemunhas sobre a existência da união estável;</li>

                    <li>No mínimo, dois dos seguintes documentos:
                        <ul>
                            <li>Comprovação de dependência emitida por autoridade fiscal ou órgão correspondente à Receita Federal;</li>
                            <li>Certidão de casamento religioso (tempo mínimo de um ano);</li>
                            <li>Disposições testamentárias que comprovem o vínculo;</li>
                            <li>Apólice de seguro de vida na qual conste um dos interessados como instituidor do seguro e o outro como beneficiário;</li>
                            <li>Escritura de compra e venda, registrada no Registro de Propriedade de Imóveis, em que constem os interessados como proprietários, ou contrato de locação de imóvel em que figurem como locatários;</li>
                            <li>Conta bancária conjunta (tempo mínimo de um ano).</li>
                        </ul>
                    </li>

                </ul>

                <h3>Permanência com base em negócios ou emprego em território brasileiro:</h3>

                <p>Aqueles que são: profissionais qualificados e contratados por instituição instalada no Brasil, profissional com capacitação reconhecida por órgão da área pertinente, ou que estão estabelecidos no Brasil com objetivo de abrir um negócio (de investimento a partir de R$150.000,00), também podem solicitar a permanência no Brasil.</p>

                <div className='atencao'>
                    <h4>ATENÇÃO!</h4>
                    <p>Lembre-se que se ausentar por mais de dois anos do território brasileiro leva a perda automática do visto permanente e da validade da Carteira de Residente Permanente!</p>
                    <p>O interessado pode acompanhar o seu processo pela internet, por telefone pelo seguinte número: <a>+55 61 2025-3232</a>, ou por e-mail <a>estrangeiros@mj.gov.br.</a></p>
                </div>

                <h3>Solicitar o Visto:</h3>

                <p>Para solicitar o visto, o estrangeiro deve apresentar o Formulário de Pedido de Visto preenchido corretamente. Para solicitar o Formulário de Pedido de Visto, acesse: <a href="https://formulario-mre.serpro.gov.br/sci/pages/web/ui/#/cidadao-nacionalidade" target='_blank'>Sistema Consular Integrado</a></p>

                <h4>Concessão do Visto Brasileiro:</h4>

                <p>O órgão responsável pela concessão de vistos no Brasil é o Itamaraty, a concessão ocorre por meio de Consulados Gerais, Consulados, Vice Consulados e das Embaixadas do Brasil em países exteriores. Para saber onde encontrar um destes Consulados ou Embaixadas oficiais em seu país, acesse: <a href="https://www.gov.br/mre/pt-br/assuntos/portal-consular/reparticoes-consulares-do-brasil/reparticoes-consulares-do-brasil" target='_blank'>Repartições Consulares do Brasil — Ministério das Relações Exteriores</a></p>

                <h4>Países Que Não Exigem Visto Para Viajar ao Brasil:</h4>

                <p>O Brasil é um país que adota a concessão de vistos usando como base o princípio da reciprocidade, o que significa que, as nações que exigem vistos dos cidadãos brasileiros também precisarão de vistos para que seus nacionais viajem ao Brasil.</p>
                <p>Entretanto, alguns países apresentam acordos bilaterais com o Brasil e estão ISENTOS da necessidade de apresentação de um visto, entre eles:</p>

                <ul>
                    <li>PAÍSES DO MERCOSUL: Argentina, Paraguai, Uruguai e Venezuela(suspensa)</li>
                    <li>OUTROS: França, Hong Kong, Irlanda, Itália, Peru, África do Sul, Reino Unido, e muitos mais.</li>
                </ul>

                <p>Para saber se o seu país precisa de visto ou não para viajar ao Brasil, acesse <a href="https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/quadro-geral-de-regime-de-vistos-para-entrada-de-estrangeiros-no-brasil" target='_blank'>Quadro Geral de Regime de Vistos para entrada de estrangeiros no Brasil — Ministério das Relações Exteriores</a></p>
            </div>
        </div>
    )
}

export default Turismo
