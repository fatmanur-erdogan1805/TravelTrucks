import { createSelector } from "@reduxjs/toolkit";
import { selectCampers } from "../campers/selectors";

export const selectFilters = (state) => state.filters;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers, filters) => {
    return campers.filter((camper) => {
      const matchesLocation = filters.location
        ? camper.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;
      const matchesAC = filters.AC ? camper.AC === true : true;
      const matchesTransmission = filters.transmission
        ? camper.transmission === filters.transmission
        : true;
      const matchesForm = filters.form ? camper.form === filters.form : true;
      const matchesKitchen = filters.Kitchen ? camper.kitchen === true : true;
      const matchesTV = filters.TV ? camper.TV === true : true;
      const matchesBathroom = filters.Bathroom
        ? camper.bathroom === true
        : true;
      const matchesMicrowave = filters.microwave
        ? camper.microwave === true
        : true;
      const matchesGas = filters.gas ? camper.gas === true : true;
      const matchesRadio = filters.radio ? camper.radio === true : true;
      const matchesRefrigerator = filters.refrigerator
        ? camper.refrigerator === true
        : true;

      const matchesVan = filters.Van ? camper.type === "Van" : true;
      const matchesFullyIntegrated = filters.FullyIntegrated
        ? camper.type === "Fully Integrated"
        : true;
      const matchesAlcove = filters.Alcove ? camper.type === "Alcove" : true;

      return (
        matchesLocation &&
        matchesAC &&
        matchesTransmission &&
        matchesForm &&
        matchesKitchen &&
        matchesTV &&
        matchesBathroom &&
        matchesMicrowave &&
        matchesGas &&
        matchesRadio &&
        matchesRefrigerator &&
        matchesVan &&
        matchesFullyIntegrated &&
        matchesAlcove
      );
    });
  }
);
