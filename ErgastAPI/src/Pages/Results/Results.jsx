import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Search from "../../components/Search";
import Table from "../../components/Table";

const Results = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://ergast.com/api/f1/current/last/results.json")
      .then((res) => res.json())
      .then((data) => {
        setResult(data.MRData.RaceTable.Races[0])
        setIsLoading(false)
      });
    }, 1000);
  }, []);

  console.log(result)

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
              <Table stats={result} />
            )}
          </div>
        </article>
      </section>
    </div>
  )
};

export default Results;
