<template>
  <private-view title="Download Metadata">
    <div style="padding: 0 var(--content-padding)">
      <v-button @click="downloadButtonHandler"
        >Download</v-button
      >
    </div>
  </private-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const xmlMetadata = `<?xml version="1.0" encoding="UTF-8"?>
<gmd:MD_Metadata xmlns:gco="http://www.isotc211.org/2005/gco"
    xmlns:gmd="http://www.isotc211.org/2005/gmd"
    xmlns:gml="http://www.opengis.net/gml"
    xmlns:gts="http://www.isotc211.org/2005/gts/"
    xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <gmd:fileIdentifier>
        <gco:CharacterString>BATASADMINDESASAMPANG25000010102022</gco:CharacterString>
    </gmd:fileIdentifier>
    <gmd:language>
        <gco:CharacterString>Bahasa Indonesia</gco:CharacterString>
    </gmd:language>
    <gmd:characterSet>
        <gmd:MD_CharacterSetCode
            codeList="./resources/codeList.xml#MD_CharacterSetCode" codeListValue="utf8">utf8</gmd:MD_CharacterSetCode>
    </gmd:characterSet>
    <gmd:parentIdentifier gco:nilReason="missing"/>
    <gmd:hierarchyLevel>
        <gmd:MD_ScopeCode
            codeList="./resources/codeList.xml#MD_ScopeCode" codeListValue="dataset">dataset</gmd:MD_ScopeCode>
    </gmd:hierarchyLevel>
    <gmd:hierarchyLevelName gco:nilReason="missing"/>
    <gmd:contact>
        <gmd:CI_ResponsibleParty>
            <gmd:individualName>
                <gco:CharacterString>EDI SUBIANTA</gco:CharacterString>
            </gmd:individualName>
            <gmd:organisationName>
                <gco:CharacterString>DINAS PENDIDIKAN KABUPATEN SAMPANG</gco:CharacterString>
            </gmd:organisationName>
            <gmd:positionName>
                <gco:CharacterString>KEPALA DINAS PENDIDIKAN KAB. SAMPANG</gco:CharacterString>
            </gmd:positionName>
            <gmd:role>
                <gmd:CI_RoleCode
                    codeList="./resources/codeList.xml#CI_RoleCode" codeListValue="owner">owner</gmd:CI_RoleCode>
            </gmd:role>
        </gmd:CI_ResponsibleParty>
    </gmd:contact>
    <gmd:contact>
        <gmd:CI_ResponsibleParty>
            <gmd:individualName>
                <gco:CharacterString>AMRIN, HD, S.KOM</gco:CharacterString>
            </gmd:individualName>
            <gmd:organisationName>
                <gco:CharacterString>DINAS KOMUNIKASI DAN INFORMATIKA</gco:CharacterString>
            </gmd:organisationName>
            <gmd:positionName>
                <gco:CharacterString>KEPALA DINAS KOMUNIKASI DAN INFORMATIKA KAB.SAMPANG</gco:CharacterString>
            </gmd:positionName>
            <gmd:role>
                <gmd:CI_RoleCode
                    codeList="./resources/codeList.xml#CI_RoleCode" codeListValue="custodian">custodian</gmd:CI_RoleCode>
            </gmd:role>
        </gmd:CI_ResponsibleParty>
    </gmd:contact>
    <gmd:dateStamp>
        <gco:Date>2022-09-29</gco:Date>
    </gmd:dateStamp>
    <gmd:metadataStandardName>
        <gco:CharacterString>ISO 19115</gco:CharacterString>
    </gmd:metadataStandardName>
    <gmd:metadataStandardVersion>
        <gco:CharacterString>ISO19115:2003/Cor 1 2006</gco:CharacterString>
    </gmd:metadataStandardVersion>
    <gmd:spatialRepresentationInfo>
        <gmd:MD_VectorSpatialRepresentation>
            <gmd:geometricObjects>
                <gmd:MD_GeometricObjects>
                    <gmd:geometricObjectType>
                        <gmd:MD_GeometricObjectTypeCode
                            codeList="./resources/codeList.xml#MD_GeometricObjectTypeCode" codeListValue="point">point</gmd:MD_GeometricObjectTypeCode>
                    </gmd:geometricObjectType>
                    <gmd:geometricObjectCount>
                        <gco:Integer>5</gco:Integer>
                    </gmd:geometricObjectCount>
                </gmd:MD_GeometricObjects>
            </gmd:geometricObjects>
        </gmd:MD_VectorSpatialRepresentation>
    </gmd:spatialRepresentationInfo>
    <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
            <gmd:citation>
                <gmd:CI_Citation>
                    <gmd:title>
                        <gco:CharacterString>Peta Batas Admin di Kabupaten Sampang Skala 1:25000</gco:CharacterString>
                    </gmd:title>
                    <gmd:date>
                        <gmd:CI_Date>
                            <gmd:date>
                                <gco:Date>2022-09-29</gco:Date>
                            </gmd:date>
                            <gmd:dateType>
                                <gmd:CI_DateTypeCode
                                    codeList="./resources/codeList.xml#CI_DateTypeCode" codeListValue="creation">creation</gmd:CI_DateTypeCode>
                            </gmd:dateType>
                        </gmd:CI_Date>
                    </gmd:date>
                </gmd:CI_Citation>
            </gmd:citation>
            <gmd:abstract>
                <gco:CharacterString>Peta batas administrasi di Kabupaten Sampang skala 1:25000 tahun 2022 berdasarkan data hasil survei lapangan</gco:CharacterString>
            </gmd:abstract>
            <gmd:spatialRepresentationType>
                <gmd:MD_SpatialRepresentationTypeCode
                    codeList="./resources/codeList.xml#MD_SpatialRepresentationTypeCode" codeListValue="vector">vector</gmd:MD_SpatialRepresentationTypeCode>
            </gmd:spatialRepresentationType>
            <gmd:language>
                <gco:CharacterString>Bahasa Indonesia</gco:CharacterString>
            </gmd:language>
            <gmd:characterSet gco:nilReason="missing"/>
            <gmd:topicCategory gco:nilReason="missing"/>
            <gmd:extent>
                <gmd:EX_Extent>
                    <gmd:geographicElement>
                        <gmd:EX_GeographicBoundingBox>
                            <gmd:westBoundLongitude>
                                <gco:Decimal>113.23437</gco:Decimal>
                            </gmd:westBoundLongitude>
                            <gmd:eastBoundLongitude>
                                <gco:Decimal>113.24193</gco:Decimal>
                            </gmd:eastBoundLongitude>
                            <gmd:southBoundLatitude>
                                <gco:Decimal>-7.20912</gco:Decimal>
                            </gmd:southBoundLatitude>
                            <gmd:northBoundLatitude>
                                <gco:Decimal>-7.18492</gco:Decimal>
                            </gmd:northBoundLatitude>
                        </gmd:EX_GeographicBoundingBox>
                    </gmd:geographicElement>
                </gmd:EX_Extent>
            </gmd:extent>
        </gmd:MD_DataIdentification>
    </gmd:identificationInfo>
    <gmd:contentInfo>
        <gmd:MD_FeatureCatalogueDescription>
            <gmd:includedWithDataset>
                <gco:Boolean>false</gco:Boolean>
            </gmd:includedWithDataset>
            <gmd:featureTypes>
                <gco:LocalName>ADMINISTRASI_DESA_AR_25K</gco:LocalName>
            </gmd:featureTypes>
            <gmd:featureCatalogueCitation>
                <gmd:CI_Citation>
                    <gmd:title>
                        <gco:CharacterString>ADMINISTRASI_DESA_AR_25K</gco:CharacterString>
                    </gmd:title>
                    <gmd:date>
                        <gmd:CI_Date>
                            <gmd:date>
                                <gco:Date>2022-09-29</gco:Date>
                            </gmd:date>
                            <gmd:dateType>
                                <gmd:CI_DateTypeCode
                                    codeList="./resources/codeList.xml#CI_DateTypeCode" codeListValue="publication">publication</gmd:CI_DateTypeCode>
                            </gmd:dateType>
                        </gmd:CI_Date>
                    </gmd:date>
                </gmd:CI_Citation>
            </gmd:featureCatalogueCitation>
        </gmd:MD_FeatureCatalogueDescription>
    </gmd:contentInfo>
    <gmd:distributionInfo>
        <gmd:MD_Distribution>
            <gmd:distributionFormat>
                <gmd:MD_Format>
                    <gmd:name>
                        <gco:CharacterString>SHP</gco:CharacterString>
                    </gmd:name>
                    <gmd:version>
                        <gco:CharacterString>---</gco:CharacterString>
                    </gmd:version>
                </gmd:MD_Format>
            </gmd:distributionFormat>
            <gmd:transferOptions>
                <gmd:MD_DigitalTransferOptions>
                    <gmd:transferSize>
                        <gco:Real>0.0</gco:Real>
                    </gmd:transferSize>
                    <gmd:onLine>
                        <gmd:CI_OnlineResource>
                            <gmd:linkage>
                                <gmd:URL>http://sig4ta.sampangkab.go.id/geoserver/sig4ta_sampang/wms</gmd:URL>
                            </gmd:linkage>
                            <gmd:protocol>
                                <gco:CharacterString>OGC:WMS</gco:CharacterString>
                            </gmd:protocol>
                            <gmd:name>
                                <gco:CharacterString>ADMINISTRASI_DESA_AR_25K</gco:CharacterString>
                            </gmd:name>
                        </gmd:CI_OnlineResource>
                    </gmd:onLine>
                </gmd:MD_DigitalTransferOptions>
            </gmd:transferOptions>
        </gmd:MD_Distribution>
    </gmd:distributionInfo>
    <gmd:applicationSchemaInfo>
        <gmd:MD_ApplicationSchemaInformation>
            <gmd:name/>
            <gmd:schemaLanguage/>
            <gmd:constraintLanguage/>
            <gmd:schemaAscii>
                <gco:CharacterString>&lt;?xml version = '1.0' encoding = 'ISO-8859-1'?&gt; &lt;eainfo&gt; &lt;detailed&gt; &lt;enttyp&gt; &lt;enttypl&gt;PENDIDIKAN_PT_25K&lt;/enttypl&gt; &lt;/enttyp&gt; &lt;attr&gt; &lt;attrlabl&gt;Alamat&lt;/attrlabl&gt; &lt;attrdomv&gt; &lt;udom&gt;String&lt;/udom&gt; &lt;/attrdomv&gt; &lt;/attr&gt; &lt;attr&gt; &lt;attrlabl&gt;Status Sek&lt;/attrlabl&gt; &lt;attrdomv&gt; &lt;udom&gt;String&lt;/udom&gt; &lt;/attrdomv&gt; &lt;/attr&gt; &lt;attr&gt; &lt;attrlabl&gt;Jenis Pend&lt;/attrlabl&gt; &lt;attrdomv&gt; &lt;udom&gt;String&lt;/udom&gt; &lt;/attrdomv&gt; &lt;/attr&gt; &lt;attr&gt; &lt;attrlabl&gt;Jenjang Pe&lt;/attrlabl&gt; &lt;attrdomv&gt; &lt;udom&gt;String&lt;/udom&gt; &lt;/attrdomv&gt; &lt;/attr&gt; &lt;attr&gt; &lt;attrlabl&gt;Y&lt;/attrlabl&gt; &lt;attrdomv&gt; &lt;udom&gt;Real&lt;/udom&gt; &lt;/attrdomv&gt; &lt;/attr&gt; &lt;attr&gt; &lt;attrlabl&gt;X&lt;/attrlabl&gt; &lt;attrdomv&gt; &lt;udom&gt;Real&lt;/udom&gt; &lt;/attrdomv&gt; &lt;/attr&gt; &lt;attr&gt; &lt;attrlabl&gt;FCODE&lt;/attrlabl&gt; &lt;attrdomv&gt; &lt;udom&gt;String&lt;/udom&gt; &lt;/attrdomv&gt; &lt;/attr&gt; &lt;attr&gt; &lt;attrlabl&gt;NAMOBJ&lt;/attrlabl&gt; &lt;attrdomv&gt; &lt;udom&gt;String&lt;/udom&gt; &lt;/attrdomv&gt; &lt;/attr&gt; &lt;attr&gt; &lt;attrlabl&gt;JJGPDG&lt;/attrlabl&gt; &lt;attrdomv&gt; &lt;udom&gt;String&lt;/udom&gt; &lt;/attrdomv&gt; &lt;/attr&gt; &lt;/detailed&gt; &lt;/eainfo&gt;</gco:CharacterString>
            </gmd:schemaAscii>
        </gmd:MD_ApplicationSchemaInformation>
    </gmd:applicationSchemaInfo>
</gmd:MD_Metadata>
`

export default defineComponent({
  // data() {
  //   return {};
  // },
  // inject: ["api"],
  methods: {
    downloadButtonHandler() {
      let anchor = document.createElement("a");
      const href = window.URL.createObjectURL(new Blob([xmlMetadata]));
      anchor.href = href;
      anchor.download = "metadata.xml";
      anchor.click();
      window.URL.revokeObjectURL(href);
      anchor.remove();
    },
  },
});
</script>
