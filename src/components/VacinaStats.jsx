export default function VacinaStats() {
  return (
    <div
      className="position-relative overflow-hidden m-md-3 text-center bg-light"
      id="fundohead"
    >
      <div className="col-md-5 p-lg-5 mx-auto my-1">
        <p className="stats__cabecalho f-size-30">
          <b> Doses Aplicadas</b>
        </p>

        <div className="bg-white primary__color px-5 py-3 f-size-50">
          <b>135.589.384</b>
        </div>
        <div className="d-flex gap-3 justify-content-between align-items-start mt-2">
          <div className="w-50">
            <b
              className="font-weight-normal d-block text-dark"
              id="vacinadados2"
            >
              96.249.301
            </b>
            <p className="stats__cabecalho">
              <b>Primeira dose</b>
            </p>
          </div>
          <div className="w-50">
            <b className="font-weight-normal d-block" id="vacinadados3">
              39.240.083
            </b>
            <p className="stats__cabecalho">
              <b>
                Segunda dose
                <br />e<br />
                dose única
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
