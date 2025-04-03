import { showSummaryElement } from "../views/showSummaryIndex.js";

export function updateSummaries (){
    showSummaryElement("summaryCardsIndex");
}

export function updateAllIndexElements (){
    updateSummaries();
}