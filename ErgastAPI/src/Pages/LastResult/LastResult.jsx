import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import Search from "../../components/Search";
import Table from "../../components/Table";
//http://ergast.com/api/f1/current/last/results.json

const Results = () => {
  const [result, setResult] = useState([]);
  const [resultInfo, setResultInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/last/results.json")
      .then((res) => res.json())
      .then((data) => {
        setResult(data.MRData.RaceTable.Races)
        setIsLoading(false)
      });
  }, []);
  
  return (
    <div className="container">
      <section>
        <h1 className="m-block">Results</h1>
        <article className="card">
          <div className="m-block">
            <Search name="Find the result for each race" placeholder="Type the tracks name or location..." />
          </div>
          <div>
            {isLoading ? (
              <Loading />
            ) : (
              <Table />
            )}
          </div>
        </article>
      </section>
    </div>
  )
};

export default Results;
