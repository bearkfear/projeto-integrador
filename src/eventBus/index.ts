import Vue from "vue";

export default new Vue();

export const TYPES = { 
  START_UPLOAD: "START_UPLOAD",
  START_UPLOAD_DOCS: "START_UPLOAD_DOCS",
  REFRESH_LIST_MIDIAS: "REFRESH_LIST_MIDIAS",
  REFRESH_LIST_DOCS: "REFRESH_LIST_DOCS",
  REFRESH_LIST_VISTORIAS: "REFRESH_LIST_VISTORIAS", 
  START_UPLOAD_MIDIAS_VISTORIA: "START_UPLOAD_MIDIAS_VISTORIA",
  ADD_UPLOADED_MIDIA_TO_VISTORIA: "ADD_UPLOADED_MIDIA_TO_VISTORIA"
}