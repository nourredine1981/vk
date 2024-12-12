<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:exsl="http://exslt.org/common"
                xmlns:math="http://exslt.org/math"
                xmlns:regexp="http://exslt.org/regular-expressions"
                xmlns:set="http://exslt.org/sets"
                xmlns:str="http://exslt.org/strings"
                extension-element-prefixes="exsl math regexp set str">
  
  <xsl:output method="html" doctype-public="XSLT-compat"/>

  <!-- Template principal -->
  <xsl:template match="/">
    <html>
      <head>
        <title>Catalogue des Livres</title>
      </head>
      <body>
        <h1>Catalogue des Livres</h1>
        <table border="1">
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Prix</th>
          </tr>
          <xsl:for-each select="/catalogue/livre">
            <tr>
              <td><xsl:value-of select="titre"/></td>
              <td><xsl:value-of select="auteur"/></td>
              <td><xsl:value-of select="prix"/></td>
            </tr>
          </xsl:for-each>
        </table>

        <!-- Exemples d'utilisation des fonctions EXSLT -->
        <h2>Utilisation des Fonctions EXSLT</h2>
        
        <!-- Utilisation de exsl:node-set -->
        <xsl:variable name="myNodeset" select="exsl:node-set('&lt;root>&lt;item>1&lt;/item>&lt;item>2&lt;/item>&lt;/root>')"/>
        <p>exsl:node-set: <xsl:value-of select="$myNodeset/root/item"/></p>
        
        <!-- Utilisation de math:highest et math:min -->
        <xsl:variable name="values" select="'1 3 5 2 4'"/>
        <p>Valeur la plus élevée: <xsl:value-of select="math:highest($
