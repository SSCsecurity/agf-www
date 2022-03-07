// --
// Define the report object. This object enables us to package the 
// entire result of the RSP calculation as one for easy manipulation
//
//  @author  Ayinde Yakubu//  @version $Revision: 1.4 $
//  Copyright (c) 2003, Unisen Inc. Canada
//


function beginHTMLBody()
{
  document.write("<BODY BGCOLOR='#ffffff' MARGINWIDTH='5' MARGINHEIGHT='5' LEFTMARGIN='5' TOPMARGIN='5'>");
  document.write("<TABLE WIDTH='100%' CELLPADDING='0' CELLSPACING='0' BORDER='0' ALIGN='center'>");
  document.write("<TR>");
  document.write("</TR>");
  document.write("<TR>");
  document.write("</TR>");
  document.write("<TR>");
  document.write("<TD WIDTH='4' valign='top'></TD>");
  document.write("<TD><IMG SRC='image/dot.gif' WIDTH='3' HEIGHT='1' ALT='' BORDER='0'></TD>");
  document.write("<TD WIDTH='100%' VALIGN='top'>");
  document.write("<TABLE WIDTH='100%' CELLSPACING='0' CELLPADDING='0' BORDER='0'>");
  document.write("<TR>");
  document.write("<TD WIDTH='100%'><TABLE WIDTH='100%' class='page-header-table'><TR><TD class='page-header-td'>Calculatrice de RER</TD></TR></TABLE></TD>");
  document.write("</TR>");
  document.write("<TR><TD>&nbsp;</TD></TR>");
  document.write("<TD WIDTH='100%' align='right'>");
  document.write("<A CLASS=\"underline\" href=javascript:showHelp('rrsp_help.html')><img src=\"image/help.gif\" border=\"0\">Aide</a>");
  document.write("<img src=\"images/dot.gif\" border=\"0\" height=\"1\" width=\"20\">");
  document.write("<A CLASS=\"underline\" href='rrspcalc.zip'><img src=\"image/download.gif\" border=\"0\">Télécharger</A>");
  document.write("<img src=\"images/dot.gif\" border=\"0\" height=\"1\" width=\"20\">");
  document.write("<A CLASS=\"underline\" HREF=\"#\" ONCLICK=\"decreaseFontSize();return false;\"><img src=\"image/font_minus.gif\" border=\"0\">Police</a>");
  document.write("<img src=\"images/dot.gif\" border=\"0\" height=\"1\" width=\"20\">");
  document.write("<A CLASS=\"underline\" HREF=\"#\" ONCLICK=\"increaseFontSize();return false;\"><img src=\"image/font_plus.gif\" border=\"0\">Police</a>");
  document.write("<img src=\"images/dot.gif\" border=\"0\" height=\"1\" width=\"20\">");
  document.write("<a CLASS=\"underline\" href=javascript:window.print()><img src='image/btn_print.gif' border='0'>Imprimer</a>");
  document.write("<img src=\"images/dot.gif\" border=\"0\" height=\"1\" width=\"20\">");  
  document.write("</TD>");
  document.write("</TR>"); 
  document.write("<TR>");
  document.write("<td>");
}

function endHTMLBody()
{
  document.write("</TD>");
  document.write("</TR>");
  document.write("</TABLE>");
  document.write("</TD>");
  document.write("</TR>");
  document.write("<TR>");
  document.write("<TD WIDTH='580' colspan='3'>");
  document.write("<TABLE WIDTH='600' CELLSPACING='0' CELLPADDING='0' BORDER='0' ALIGN='center'>");
  document.write("<TR>");
  document.write("<TD COLSPAN='13'><IMG SRC='image/dot.gif' WIDTH='1' HEIGHT='40' ALT='' BORDER='0'></TD>");
  document.write("</TR>");
  document.write("<TR>");
  document.write("<TD WIDTH='70%'>");
  document.write("&nbsp;&nbsp;");
  //if safari, just call the original url as history back doesn't work. this is will erase all the from data and nav parameter value
  if(/Safari/.test(navigator.userAgent)) {
	document.write("<a CLASS=\"underline\" href=\"/t2scr/static/app/tools/rspcalc/public/fr/rrspcalc.jsp\"> Retour  \à la Calculatrice</a>");
  } else {
	document.write("<a CLASS=\"underline\" href=javascript:window.history.back()> Retour  \à la Calculatrice</a>");
  }     
  document.write("</TD>");
  document.write("</TR>");
  document.write("</TABLE>");
  document.write("</TD>");
  document.write("</TR>");
  document.write("</TABLE>");
  document.write("</BODY>");

}


