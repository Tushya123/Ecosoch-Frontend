import React, { Fragment, useState } from "react";
import "./Faq.css";
import { Accordion } from "react-bootstrap";

function FAQCont() {
  const [cont, setCont] = useState("all");
  function handleFilter(filter) {
    setCont(filter);
  }
  return (
    <Fragment>
      <div className="master-box">
        <div className="faq-header">
          <div className="filter-search">
            <hr className="hr-sep" />
            <div id="myBtnContainer">
              <button
                className="btn"
                autoFocus
                onClick={() => handleFilter("all")}
              >
                &nbsp;All
              </button>
              <button className="btn" onClick={() => handleFilter("grid")}>
                &nbsp;Grid Connected
              </button>
              <button className="btn" onClick={() => handleFilter("hybrid")}>
                &nbsp;Hybrid System
              </button>
              <button className="btn" onClick={() => handleFilter("offgrid")}>
                &nbsp;Off Grid System
              </button>
            </div>
          </div>
        </div>
        {cont === "all" ? (
          <Accordion flush>
            <ul id="myUL">
              <li className="account orders">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="accordion-thumb">
                    <span>What is feed in tariff?</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Feed-In tariff is the rate at which the DISCOM buys back
                    solar power from it’s customers after the self consumption
                    of solar power by the customer. BESCOM in it’s current
                    policy is paying back Rs.3.56 per for each solar unit the
                    customer gives to the grid. You can read more on the solar
                    rooftop policy in Karnataka in the following link: BESCOM
                    Solar Policy
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      How much Rooftop area is required for Solar Rooftop?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    For Solar Rooftop, approximately 100Sqft of shade free area
                    is needed for 1kVA Solar modules
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      I already have a UPS based battery backup solution for my
                      home. Can I use this along with solar?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Yes, this back-up can run the household loads during a
                    power-cut as usual. This system will work independently of
                    the solar system.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="3">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      What are the ideal cases when I should go for an on-grid
                      system?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    On-grid systems without batteries can be considered for the
                    following purposes: To neutralize the electricity bill and
                    generate free, clean energy for oneself. To hedge against
                    the increase in prices of electricity tariff · To generate
                    some income over a long period of time. Yes, the solar plant
                    is an asset that generates revenue throughout its lifetime.
                    On-grid system without batteries shouldn’t be considered at
                    places where the power outages are quite high especially
                    during day time. This system is not recommended for places
                    where the reliability of power is the first choice.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      Is there a way that I can use the solar power during
                      power-cuts?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Solar power generated during power outages can be stored in
                    batteries. These systems are called hybrid systems as they
                    have battery storage facility as well as grid connection.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="5">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      Why is that solar generation is stopped when there is a
                      power cut, which is the time when solar is required more
                      than ever?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    The reason behind this logic is that during a power cut, in
                    case electricity personals are working on the grid lines,
                    export of solar power can cause electric shock to the people
                    working on it. So this is more of a safety issue that solar
                    generation stops.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="6">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      What is the disadvantage of the grid-connected system
                      without batteries?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    The solar generation is stopped when there is a power-cut
                    from the grid. The solar inverters have the inbuilt property
                    called anti-islanding which makes sure that the moment there
                    is a power outage at the grid, it will stop the solar
                    generation.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="7">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      How do I know that I am eligible for grid connection?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Depending on the state level policy prevailing in your state
                    for roof-top solar, the requirements for putting up a solar
                    power plant can vary. In general, these are the few basic
                    requirements for applying for a roof-top solar system: You
                    should be the owner of the building where you intend to put
                    solar. · You should be the consumer of the local
                    ESCOM(Energy Supply COMpany), the energy meter should be in
                    your name.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="8">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      What are the advantages of grid connection compared to
                      no-grid connection?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Grid connection can eliminate the requirement of batteries
                    in a solar roof-top system which can give a longer life for
                    the system without replacement of its parts. Apart from this
                    the following benefits are also there compared to an
                    off-grid battery based system: Lower system cost as lower
                    accessories are required. · The inverter efficiencies are
                    better in a battery-less system which reduces the energy
                    losses.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="9">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      What are the different options available for me to go
                      on-grid or grid connected?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Depending on the state level policy, there are two different
                    options for going grid connected/on-grid/hybrid: Net
                    metering: The metering system where the power generated is
                    first consumed by the loads in the building. Only excess is
                    exported to the grid. In net metering, the bill is
                    calculated as a difference of total export & total import
                    Gross Metering: The metering system where the whole power is
                    exported to the grid. Generally in gross metering output of
                    a solar inverter is directly connected to the grid and not
                    to the loads first. For example, in Karnataka, for
                    residential buildings, the choice for grid connection is
                    through net metering
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="10">
                  <Accordion.Header className="accordion-thumb">
                    <span> What are the functions of an On-Grid inverter?</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    An On-Grid inverter performs the following major functions:
                    Convert the DC Power from solar panels to AC Power.
                    Synchronize this AC power with the voltage & frequency of
                    the grid power. Maximize the output from the solar
                    panels(via a feature called MPPT).
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="11">
                  <Accordion.Header className="accordion-thumb">
                    <span>What do you mean by ‘load’?</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Loads are nothing but the energy consuming electrical
                    appliances. Light, fan, refrigerator, motor are some of the
                    examples.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="12">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      How is that a Solar PV System is connected to grid or
                      grid-tied?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    The Solar On-Grid PV System is connected to the grid via the
                    Solar inverter. In terms of physical connection, the solar
                    inverter (or grid-tied inverter/On-grid inverter) is
                    connected to the distribution board of a building just like
                    how a bad (equipment) point is connected.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="13">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      Do I have a discount if I have a lot of friends?What is
                      Grid?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    The grid is electricity connection that a building has. In
                    general, grid refers to the ESCOM (Energy Supply COMpany)icy
                    in Karnataka in the following link: BESCOM Solar Policy
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="14">
                  <Accordion.Header className="accordion-thumb">
                    <span>What is an On-Grid System?</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    A Solar PV (Photo Voltaic) system which is connected to the
                    grid where the system can potentially send power back to the
                    grid as well. These systems are also called grid-tied
                    systems
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="15">
                  <Accordion.Header className="accordion-thumb">
                    <span>What is Grid?</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    The grid is electricity connection that a building has. In
                    general, grid refers to the ESCOM (Energy Supply COMpany)
                  </Accordion.Body>
                </Accordion.Item>
              </li>
            </ul>
          </Accordion>
        ) : null}
        {cont === "grid" ? (
          <Accordion flush>
            <ul id="myUL">
              <li className="account orders">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="accordion-thumb">
                    <span>What is feed in tariff?</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Feed-In tariff is the rate at which the DISCOM buys back
                    solar power from it’s customers after the self consumption
                    of solar power by the customer. BESCOM in it’s current
                    policy is paying back Rs.3.56 per for each solar unit the
                    customer gives to the grid. You can read more on the solar
                    rooftop policy in Karnataka in the following link: BESCOM
                    Solar Policy
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      How much Rooftop area is required for Solar Rooftop?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    For Solar Rooftop, approximately 100Sqft of shade free area
                    is needed for 1kVA Solar modules
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      I already have a UPS based battery backup solution for my
                      home. Can I use this along with solar?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Yes, this back-up can run the household loads during a
                    power-cut as usual. This system will work independently of
                    the solar system.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="3">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      What are the ideal cases when I should go for an on-grid
                      system?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    On-grid systems without batteries can be considered for the
                    following purposes: To neutralize the electricity bill and
                    generate free, clean energy for oneself. To hedge against
                    the increase in prices of electricity tariff · To generate
                    some income over a long period of time. Yes, the solar plant
                    is an asset that generates revenue throughout its lifetime.
                    On-grid system without batteries shouldn’t be considered at
                    places where the power outages are quite high especially
                    during day time. This system is not recommended for places
                    where the reliability of power is the first choice.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      Is there a way that I can use the solar power during
                      power-cuts?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Solar power generated during power outages can be stored in
                    batteries. These systems are called hybrid systems as they
                    have battery storage facility as well as grid connection.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="5">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      Why is that solar generation is stopped when there is a
                      power cut, which is the time when solar is required more
                      than ever?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    The reason behind this logic is that during a power cut, in
                    case electricity personals are working on the grid lines,
                    export of solar power can cause electric shock to the people
                    working on it. So this is more of a safety issue that solar
                    generation stops.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="6">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      What is the disadvantage of the grid-connected system
                      without batteries?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    The solar generation is stopped when there is a power-cut
                    from the grid. The solar inverters have the inbuilt property
                    called anti-islanding which makes sure that the moment there
                    is a power outage at the grid, it will stop the solar
                    generation.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="7">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      How do I know that I am eligible for grid connection?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Depending on the state level policy prevailing in your state
                    for roof-top solar, the requirements for putting up a solar
                    power plant can vary. In general, these are the few basic
                    requirements for applying for a roof-top solar system: You
                    should be the owner of the building where you intend to put
                    solar. · You should be the consumer of the local
                    ESCOM(Energy Supply COMpany), the energy meter should be in
                    your name.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="8">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      What are the advantages of grid connection compared to
                      no-grid connection?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Grid connection can eliminate the requirement of batteries
                    in a solar roof-top system which can give a longer life for
                    the system without replacement of its parts. Apart from this
                    the following benefits are also there compared to an
                    off-grid battery based system: Lower system cost as lower
                    accessories are required. · The inverter efficiencies are
                    better in a battery-less system which reduces the energy
                    losses.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="9">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      What are the different options available for me to go
                      on-grid or grid connected?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Depending on the state level policy, there are two different
                    options for going grid connected/on-grid/hybrid: Net
                    metering: The metering system where the power generated is
                    first consumed by the loads in the building. Only excess is
                    exported to the grid. In net metering, the bill is
                    calculated as a difference of total export & total import
                    Gross Metering: The metering system where the whole power is
                    exported to the grid. Generally in gross metering output of
                    a solar inverter is directly connected to the grid and not
                    to the loads first. For example, in Karnataka, for
                    residential buildings, the choice for grid connection is
                    through net metering
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="10">
                  <Accordion.Header className="accordion-thumb">
                    <span> What are the functions of an On-Grid inverter?</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    An On-Grid inverter performs the following major functions:
                    Convert the DC Power from solar panels to AC Power.
                    Synchronize this AC power with the voltage & frequency of
                    the grid power. Maximize the output from the solar
                    panels(via a feature called MPPT).
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="11">
                  <Accordion.Header className="accordion-thumb">
                    <span>What do you mean by ‘load’?</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Loads are nothing but the energy consuming electrical
                    appliances. Light, fan, refrigerator, motor are some of the
                    examples.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="12">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      How is that a Solar PV System is connected to grid or
                      grid-tied?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    The Solar On-Grid PV System is connected to the grid via the
                    Solar inverter. In terms of physical connection, the solar
                    inverter (or grid-tied inverter/On-grid inverter) is
                    connected to the distribution board of a building just like
                    how a bad (equipment) point is connected.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="13">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      Do I have a discount if I have a lot of friends?What is
                      Grid?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    The grid is electricity connection that a building has. In
                    general, grid refers to the ESCOM (Energy Supply COMpany)icy
                    in Karnataka in the following link: BESCOM Solar Policy
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="14">
                  <Accordion.Header className="accordion-thumb">
                    <span>What is an On-Grid System?</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    A Solar PV (Photo Voltaic) system which is connected to the
                    grid where the system can potentially send power back to the
                    grid as well. These systems are also called grid-tied
                    systems
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="15">
                  <Accordion.Header className="accordion-thumb">
                    <span>What is Grid?</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    The grid is electricity connection that a building has. In
                    general, grid refers to the ESCOM (Energy Supply COMpany)
                  </Accordion.Body>
                </Accordion.Item>
              </li>
            </ul>
          </Accordion>
        ) : null}
        {cont === "hybrid" ? (
          <Accordion flush>
            <ul id="myUL">
              <li className="account orders">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="accordion-thumb">
                    <span>What is feed in tariff?</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Feed-In tariff is the rate at which the DISCOM buys back
                    solar power from it’s customers after the self consumption
                    of solar power by the customer. BESCOM in it’s current
                    policy is paying back Rs.3.56 per for each solar unit the
                    customer gives to the grid. You can read more on the solar
                    rooftop policy in Karnataka in the following link: BESCOM
                    Solar Policy
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      How much Rooftop area is required for Solar Rooftop?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    For Solar Rooftop, approximately 100Sqft of shade free area
                    is needed for 1kVA Solar modules
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      I already have a UPS based battery backup solution for my
                      home. Can I use this along with solar?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Yes, this back-up can run the household loads during a
                    power-cut as usual. This system will work independently of
                    the solar system.
                  </Accordion.Body>
                </Accordion.Item>
              </li>

              <li className="account orders">
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      Is there a way that I can use the solar power during
                      power-cuts?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Solar power generated during power outages can be stored in
                    batteries. These systems are called hybrid systems as they
                    have battery storage facility as well as grid connection.
                  </Accordion.Body>
                </Accordion.Item>
              </li>

              <li className="account orders">
                <Accordion.Item eventKey="9">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      What are the different options available for me to go
                      on-grid or grid connected?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Depending on the state level policy, there are two different
                    options for going grid connected/on-grid/hybrid: Net
                    metering: The metering system where the power generated is
                    first consumed by the loads in the building. Only excess is
                    exported to the grid. In net metering, the bill is
                    calculated as a difference of total export & total import
                    Gross Metering: The metering system where the whole power is
                    exported to the grid. Generally in gross metering output of
                    a solar inverter is directly connected to the grid and not
                    to the loads first. For example, in Karnataka, for
                    residential buildings, the choice for grid connection is
                    through net metering
                  </Accordion.Body>
                </Accordion.Item>
              </li>

              <li className="account orders">
                <Accordion.Item eventKey="11">
                  <Accordion.Header className="accordion-thumb">
                    <span>What do you mean by ‘load’?</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Loads are nothing but the energy consuming electrical
                    appliances. Light, fan, refrigerator, motor are some of the
                    examples.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="12">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      How is that a Solar PV System is connected to grid or
                      grid-tied?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    The Solar On-Grid PV System is connected to the grid via the
                    Solar inverter. In terms of physical connection, the solar
                    inverter (or grid-tied inverter/On-grid inverter) is
                    connected to the distribution board of a building just like
                    how a bad (equipment) point is connected.
                  </Accordion.Body>
                </Accordion.Item>
              </li>

              <li className="account orders">
                <Accordion.Item eventKey="14">
                  <Accordion.Header className="accordion-thumb">
                    <span>What is an On-Grid System?</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    A Solar PV (Photo Voltaic) system which is connected to the
                    grid where the system can potentially send power back to the
                    grid as well. These systems are also called grid-tied
                    systems
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="account orders">
                <Accordion.Item eventKey="15">
                  <Accordion.Header className="accordion-thumb">
                    <span>What is Grid?</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    The grid is electricity connection that a building has. In
                    general, grid refers to the ESCOM (Energy Supply COMpany)
                  </Accordion.Body>
                </Accordion.Item>
              </li>
            </ul>
          </Accordion>
        ) : null}
        {cont === "offgrid" ? (
          <Accordion flush>
            <ul id="myUL">
              <li className="account orders">
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="accordion-thumb">
                    <span>
                      {" "}
                      How much Rooftop area is required for Solar Rooftop?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    For Solar Rooftop, approximately 100Sqft of shade free area
                    is needed for 1kVA Solar modules
                  </Accordion.Body>
                </Accordion.Item>
              </li>

              <li className="account orders">
                <Accordion.Item eventKey="11">
                  <Accordion.Header className="accordion-thumb">
                    <span>What do you mean by ‘load’?</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-panel">
                    Loads are nothing but the energy consuming electrical
                    appliances. Light, fan, refrigerator, motor are some of the
                    examples.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
            </ul>
          </Accordion>
        ) : null}
        {/* <Accordion flush>
          <ul id="myUL">
            <li className="account orders">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="accordion-thumb">
                  <span>What is feed in tariff?</span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  Feed-In tariff is the rate at which the DISCOM buys back solar
                  power from it’s customers after the self consumption of solar
                  power by the customer. BESCOM in it’s current policy is paying
                  back Rs.3.56 per for each solar unit the customer gives to the
                  grid. You can read more on the solar rooftop policy in
                  Karnataka in the following link: BESCOM Solar Policy
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="account orders">
              <Accordion.Item eventKey="1">
                <Accordion.Header className="accordion-thumb">
                  <span>
                    {" "}
                    How much Rooftop area is required for Solar Rooftop?
                  </span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  For Solar Rooftop, approximately 100Sqft of shade free area is
                  needed for 1kVA Solar modules
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="account orders">
              <Accordion.Item eventKey="2">
                <Accordion.Header className="accordion-thumb">
                  <span>
                    I already have a UPS based battery backup solution for my
                    home. Can I use this along with solar?
                  </span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  Yes, this back-up can run the household loads during a
                  power-cut as usual. This system will work independently of the
                  solar system.
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="account orders">
              <Accordion.Item eventKey="3">
                <Accordion.Header className="accordion-thumb">
                  <span>
                    {" "}
                    What are the ideal cases when I should go for an on-grid
                    system?
                  </span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  On-grid systems without batteries can be considered for the
                  following purposes: To neutralize the electricity bill and
                  generate free, clean energy for oneself. To hedge against the
                  increase in prices of electricity tariff · To generate some
                  income over a long period of time. Yes, the solar plant is an
                  asset that generates revenue throughout its lifetime. On-grid
                  system without batteries shouldn’t be considered at places
                  where the power outages are quite high especially during day
                  time. This system is not recommended for places where the
                  reliability of power is the first choice.
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="account orders">
              <Accordion.Item eventKey="4">
                <Accordion.Header className="accordion-thumb">
                  <span>
                    {" "}
                    Is there a way that I can use the solar power during
                    power-cuts?
                  </span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  Solar power generated during power outages can be stored in
                  batteries. These systems are called hybrid systems as they
                  have battery storage facility as well as grid connection.
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="account orders">
              <Accordion.Item eventKey="5">
                <Accordion.Header className="accordion-thumb">
                  <span>
                    {" "}
                    Why is that solar generation is stopped when there is a
                    power cut, which is the time when solar is required more
                    than ever?
                  </span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  The reason behind this logic is that during a power cut, in
                  case electricity personals are working on the grid lines,
                  export of solar power can cause electric shock to the people
                  working on it. So this is more of a safety issue that solar
                  generation stops.
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="account orders">
              <Accordion.Item eventKey="6">
                <Accordion.Header className="accordion-thumb">
                  <span>
                    {" "}
                    What is the disadvantage of the grid-connected system
                    without batteries?
                  </span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  The solar generation is stopped when there is a power-cut from
                  the grid. The solar inverters have the inbuilt property called
                  anti-islanding which makes sure that the moment there is a
                  power outage at the grid, it will stop the solar generation.
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="account orders">
              <Accordion.Item eventKey="7">
                <Accordion.Header className="accordion-thumb">
                  <span>
                    {" "}
                    How do I know that I am eligible for grid connection?
                  </span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  Depending on the state level policy prevailing in your state
                  for roof-top solar, the requirements for putting up a solar
                  power plant can vary. In general, these are the few basic
                  requirements for applying for a roof-top solar system: You
                  should be the owner of the building where you intend to put
                  solar. · You should be the consumer of the local ESCOM(Energy
                  Supply COMpany), the energy meter should be in your name.
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="account orders">
              <Accordion.Item eventKey="8">
                <Accordion.Header className="accordion-thumb">
                  <span>
                    What are the advantages of grid connection compared to
                    no-grid connection?
                  </span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  Grid connection can eliminate the requirement of batteries in
                  a solar roof-top system which can give a longer life for the
                  system without replacement of its parts. Apart from this the
                  following benefits are also there compared to an off-grid
                  battery based system: Lower system cost as lower accessories
                  are required. · The inverter efficiencies are better in a
                  battery-less system which reduces the energy losses.
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="account orders">
              <Accordion.Item eventKey="9">
                <Accordion.Header className="accordion-thumb">
                  <span>
                    What are the different options available for me to go
                    on-grid or grid connected?
                  </span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  Depending on the state level policy, there are two different
                  options for going grid connected/on-grid/hybrid: Net metering:
                  The metering system where the power generated is first
                  consumed by the loads in the building. Only excess is exported
                  to the grid. In net metering, the bill is calculated as a
                  difference of total export & total import Gross Metering: The
                  metering system where the whole power is exported to the grid.
                  Generally in gross metering output of a solar inverter is
                  directly connected to the grid and not to the loads first. For
                  example, in Karnataka, for residential buildings, the choice
                  for grid connection is through net metering
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="account orders">
              <Accordion.Item eventKey="10">
                <Accordion.Header className="accordion-thumb">
                  <span> What are the functions of an On-Grid inverter?</span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  An On-Grid inverter performs the following major functions:
                  Convert the DC Power from solar panels to AC Power.
                  Synchronize this AC power with the voltage & frequency of the
                  grid power. Maximize the output from the solar panels(via a
                  feature called MPPT).
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="account orders">
              <Accordion.Item eventKey="11">
                <Accordion.Header className="accordion-thumb">
                  <span>What do you mean by ‘load’?</span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  Loads are nothing but the energy consuming electrical
                  appliances. Light, fan, refrigerator, motor are some of the
                  examples.
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="account orders">
              <Accordion.Item eventKey="12">
                <Accordion.Header className="accordion-thumb">
                  <span>
                    {" "}
                    How is that a Solar PV System is connected to grid or
                    grid-tied?
                  </span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  The Solar On-Grid PV System is connected to the grid via the
                  Solar inverter. In terms of physical connection, the solar
                  inverter (or grid-tied inverter/On-grid inverter) is connected
                  to the distribution board of a building just like how a bad
                  (equipment) point is connected.
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="account orders">
              <Accordion.Item eventKey="13">
                <Accordion.Header className="accordion-thumb">
                  <span>
                    {" "}
                    Do I have a discount if I have a lot of friends?What is
                    Grid?
                  </span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  The grid is electricity connection that a building has. In
                  general, grid refers to the ESCOM (Energy Supply COMpany)icy
                  in Karnataka in the following link: BESCOM Solar Policy
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="account orders">
              <Accordion.Item eventKey="14">
                <Accordion.Header className="accordion-thumb">
                  <span>What is an On-Grid System?</span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  A Solar PV (Photo Voltaic) system which is connected to the
                  grid where the system can potentially send power back to the
                  grid as well. These systems are also called grid-tied systems
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="account orders">
              <Accordion.Item eventKey="15">
                <Accordion.Header className="accordion-thumb">
                  <span>What is Grid?</span>
                </Accordion.Header>
                <Accordion.Body className="accordion-panel">
                  The grid is electricity connection that a building has. In
                  general, grid refers to the ESCOM (Energy Supply COMpany)
                </Accordion.Body>
              </Accordion.Item>
            </li>
          </ul>
        </Accordion> */}
      </div>
    </Fragment>
  );
}

export default FAQCont;
