import React from 'react';

export default function About() {
  return (
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <p>
        Hi, I&apos;m Somoye Ayotunde. I&apos;m a
        {' '}
        <strong>Software Engineer</strong>
        {' '}
        and I chose it because I found my
        true passion in programming. Whether figuring out a difficult problem or
        crafting beautiful user experience like
        <strong> MEOLOGY</strong>
        , programming satisfies my desire for both
        constant learning and ongoing refinement.
      </p>
      <p>
        <strong>MEOLOGY </strong>
        retrieves data from
        {' '}
        <strong>The Meal DB</strong>
        {' '}
        API. You can get to
        view a comprehensive list of meals based on your searchTerm and can also
        view the full details of each meal by clicking on the details. It is
        built using
        {' '}
        <strong>React</strong>
        {' '}
        and also utilize
        {' '}
        <strong>Redux</strong>
        .
      </p>
    </section>
  );
}
