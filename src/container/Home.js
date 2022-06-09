import React, { useEffect } from "react";
import Relation from "../components/Relation";
import Node from "../components/Node";
import SearchForm from "../components/SearchForm";
import Ways from "../components/Ways";
import useFetch from "../utils/useRequest";
import { BASE_URL } from "../utils/helpers";


export default function Home() {
  /**
   * Added a default value for form inputs and
   * used a useEffect to ensure data is being fetched
   * on first render.
   *
   * Also, didn't add values into the dependency array  to
   * prevent the page from fetching on every keystroke being
   * typed. 
   */

  const formData = {
    min_lon: "" || -98.840098,
    min_lat: "" || 48.663316,
    max_lon: "" || -98.824089,
    max_lat: "" || 48.676126,
  };
  const url = `${BASE_URL}${formData.min_lon},${formData.min_lat},${formData.max_lon},${formData.max_lat}`;
  const { makeRequest, error, data } = useFetch();
  /**
   * Figured the data is arranged by tags, and there are 
   * currently 3.
   * 1. Relation
   * 2. Node
   * 3. Way
   */
  const relation = data.filter((item) => item.id.includes("relation"));
  const ways = data.filter((item) => item.id.includes("way"));
  const nodes = data.filter((item) => item.id.includes("node"));

  useEffect(() => {
    makeRequest(url);
  }, []);
  return (
    <div>
      <header className="header">
        <SearchForm formData={formData} makeRequest={makeRequest} />
      </header>
      <main className="main">
        {error && (
          <div className="error">
            <p className="error-text">{error}</p>
          </div>
        )}
        {relation.length > 0 ? (
          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Relations</h2>
            </div>
            <div className="section-inner">
              {relation &&
                relation.map((item) => <Relation data={item} key={item.id} />)}
            </div>
          </section>
        ) : null}
        {ways.length > 0 ? (
          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Ways</h2>
            </div>
            <div className="section-inner">
              {ways && ways.map((item) => <Ways data={item} key={item.id} />)}
            </div>
          </section>
        ) : null}

        {nodes.length > 0 ? (
          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Node</h2>
            </div>

            <div className="section-inner">
              {nodes && nodes.map((item) => <Node data={item} key={item.id} />)}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
