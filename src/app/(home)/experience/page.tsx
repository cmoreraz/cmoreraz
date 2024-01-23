import Image from "next/image";

export default function Experience() {
  return (
    <>

      <div className="container-body">


        <div className="mx-auto flex items-center justify-center px-6 md:px-60 container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-1 lg:py-24">
          <div className="space-y-6 border-l-2 border-dashed">

            <div className="relative bg-gray-800 overflow-hidden rounded-3xl border-[1px] border-light-card-border bg-light-card-bg p-6 transition duration-300 dark:border-card-border dark:bg-onyx dark:hover:border-[#383737]  lg:p-16 lg:pe-0">
              <div className="flex h-full w-full flex-col gap-4">
                <a target="_blank" className="hidden lg:block" href="https://subbi.app">
                  <Image alt="Subbi Icon" width="70" height="70" decoding="async" data-nimg="1" className="absolute py-2 inset-y-0  transition duration-300 ease-out hover:rotate-[-6.21deg] hover:scale-110" src="./images/google.webp" />
                </a>
                <p className="text-xl font-extrabold text-onyx dark:text-white lg:text-3xl">
                  Software Development Engineer in Test
                </p>
                <p className="flex-1 text-dark-gray">
                  Responsible for ensuring product quality through the implementation of automated test scripts,
                  making use of tools such as Serenity BDD, Postman, JMeter and Test-Junkie.
                </p>
                <a className="cursor-pointer rounded-lg items-center inline-flex font-medium group mt-6 justify-start gap-2 text-onyx transition dark:text-white lg:mt-0" target="_blank" href="https://subbi.app">
                  lumu.io
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="transition group-hover:translate-x-1">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.17 5a30.23 30.23 0 0 1 5.62 5.406c.14.174.21.384.21.594m-5.83 6a30.232 30.232 0 0 0 5.62-5.406A.949.949 0 0 0 21 11m0 0H3">
                    </path>
                  </svg>
                </a>
              </div>

            </div>

            <div className="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
              <div className="ml-6">
                <h4 className="font-bold">Software Development Engineer in Test.</h4>
                <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Responsible for ensuring product quality through the implementation of automated test scripts, making use of tools such as Serenity BDD, Postman, JMeter and Test-Junkie.</p>
                <span className="mt-1 block text-sm font-semibold text-blue-500">2023</span>
              </div>
            </div>
            <div className="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
              <div className="ml-6">
                <h4 className="font-bold">Software Development Engineer in Test.</h4>
                <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Dirigí el equipo de automatización compuesto por 5 colaboradores, encargándome de definir e implementar la estrategia de pruebas.
                   Llevé a cabo la implementación exitosa del sistema de CI/CD mediante la herramienta Jenkins, lo que permitió la ejecución de pruebas automáticas en entornos de QA y Producción. Esta iniciativa aumentó la efectividad del equipo de calidad en un destacado 40%.
                   Diseñé y desarrollé el framework de automatización Giru Giru, el cual incrementó la efectividad del equipo de automatización en un 30% y redujo la duplicidad de código en un impresionante 80%.
                   Desarrollé una aplicación REST y un Scraper para facilitar la compra de CTL's a través de la página de la SNR. Este proyecto redujo la recompra de 12,000 a 5,000 CTL&apos;s, mejorando la efectividad de los procesos internos en un significativo 80%.
                   Creé un scraper que permitió obtener el valor de los recibos públicos de los inmuebles adquiridos por la compañía, automatizando el 90% del proceso y liberando a 4 colaboradores para otras actividades.
                   Automatizé el 100% del proceso de firma de documentos, liberando así a dos colaboradores para otras tareas.
                   Implementé la herramienta GLPI para el manejo de tickets en el área legal, logrando aumentar la efectividad de un equipo de 18 personas en un 20%.
                   Proporcioné mentoría y orientación a otros miembros del equipo, compartiendo conocimientos y buenas prácticas para fomentar el crecimiento y desarrollo profesional.
                   Implementé prácticas de control de versiones utilizando sistemas como Git.</p>
                <span className="mt-1 block text-sm font-semibold text-blue-500">2021 - 2023</span>
              </div>
            </div>
            <div className="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-gray-800">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
              <div className="ml-6">
                <h4 className="font-bold">
                  Test Automation Engineer.
                </h4>
                <p className="mt-2 max-w-screen-sm text-sm text-gray-500"> Lideré un equipo de automatización compuesto por 3 colaboradores, encargándome de definir e implementar la estrategia de pruebas.
                   Realicé la implementación exitosa del sistema de CI/CD mediante la herramienta Jenkins. Esto posibilitó la ejecución de pruebas automáticas en entornos de QA y Producción, incrementando la efectividad del equipo en un notable 30%.
                   Implementé y gestioné las herramientas Bugzilla y Testlink para el seguimiento de planes de prueba y bugs. Este cambio estratégico eliminó la necesidad de manejar archivos de Excel, proporcionando visibilidad y transparencia a todas las áreas involucradas y automatizando el proceso en su totalidad.
                   Establecí KPIs de calidad para medir el número de bugs y análisis estático, logrando mitigar la deuda técnica en un significativo 20%.
                   Implementé y mantuve herramientas de automatización de pruebas, como Selenium, JUnit, Git, Rest Assured y Appium, reduciendo el esfuerzo del equipo de calidad en un 30%.
                   Proporcioné capacitación y orientación técnica al equipo de QA, compartiendo conocimientos y fomentando el crecimiento y desarrollo profesional. Transformé los roles de QA en roles integrales con la capacidad de realizar mantenimiento a las automatizaciones.</p>
                <span className="mt-1 block text-sm font-semibold text-blue-500">2021- 2021</span>
              </div>
            </div>
            <div className="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
              <div className="ml-6">
                <h4 className="font-bold">Junior Software Testing Analyst.</h4>
                <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Responsable de garantizar la calidad del producto mediante la creacion de planes y casos de prueba.
                   Coordiné actividades de pruebas e implementé scripts automatizados de prueba utilizando herramientas como Serenity BDD, Postman y Jmeter, especialmente en el procesamiento de pagos con tarjetas de crédito, débito, cuentas de ahorro y cuentas corrientes.
                   Automatización del reporte de tiempos semanales del equipo de calidad, liberando 30 horas para otras actividades.
                   Creación de un script de pruebas automatizadas para validar la estabilidad de los ambientes de prueba, reduciendo 30 horas de pruebas manuales.
                   Implementé un repositorio que contiene consultas a bases de datos en la herramienta SQL Server, aumentando la productividad del equipo en un 5%.
                   Diseño e implementación de una base de conocimiento y capacitación en SharePoint para nuevos integrantes del equipo de calidad, optimizando la curva de aprendizaje en un 60%.</p>
                <span className="mt-1 block text-sm font-semibold text-blue-500">2020 - 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}