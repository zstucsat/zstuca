
<%
Dim Query_Badword,Form_Badword,i,Err_Message,Err_Web,name,Query_Name
'------���岿�� ͷ----------------------------------------------------------------------'
Err_Message = 1	'����ʽ��1=������һҳ,2=ת��ҳ��,3=����ʾ��ת��
Err_Web = "Err.asp"	'����ʱת���ҳ��
Query_Badword="',select,and,update,chr,delete,%20from,;,insert,mid,master.,set,chr(37),exec"
'Query_Badword ���ⲿ�ݶ���get�Ƿ�����,ʹ��","�ż��'
Form_Badword="',%,#,<,>,select,update,insert,delete,set,iframe,script,javascript,vbscript,exec"
'���ⲿ�ݶ���post�Ƿ�����,ʹ��","�ż��'
'------���岿�� β-----------------------------------------------------------------------'
On Error Resume Next
'----- �� get query ֵ �Ĺ���.'
if request.QueryString<>"" then
	Chk_badword=split(Query_Badword,"," )
	FOR EACH Query_Name IN Request.QueryString
		for i=0 to ubound(Chk_badword)
			If Instr(LCase(request.QueryString(Query_Name)),Chk_badword(i))<>0 Then
			
				Select Case Err_Message
					Case "1"
						Response.Write "<Script Language='javascript'>alert('���δ��󣡲��� "&Query_Name&" ��ֵ�а����Ƿ��ַ�����\n\n�벻Ҫ�ڲ����г��֣�and update delete ; insert mid master �ȷǷ��ַ���');window.history.back(-1);</Script>"
					Case "2"
						Response.Write "<Script Language='javascript'>window.location.href='"&Err_Web&"'</Script>"
					Case "3"
						Response.Write "<Script Language='javascript'>alert('���δ��󣡲��� "&Query_Name&"��ֵ�а����Ƿ��ַ�����\n\n�벻Ҫ�ڲ����г��֣�and update delete ; insert mid master �ȷǷ��ַ���');window.location.href='"&Err_Web&"';</Script>"
				End Select
				Response.End
			End If
		NEXT
	NEXT
End if
'-----�� post �� ��ֵ�Ĺ���.'
if request.form<>"" then
	Chk_badword=split(Form_Badword,"," )
	FOR EACH name IN Request.Form
		for i=0 to ubound(Chk_badword)response.Write(request.form(name))
			If Instr(LCase(request.form(name)),Chk_badword(i))<>0 Then
				Select Case Err_Message
					Case "1"
						Response.Write "<Script Language='javascript'>alert('�����ˣ��� "&name&" ��ֵ�а����Ƿ��ַ�����\n\n�벻Ҫ�ڱ��г��֣� % & * # ( ) �ȷǷ��ַ���');window.history.back(-1);</Script>"
					Case "2"
						Response.Write "<Script Language='javascript'>window.location.href='"&Err_Web&"'</Script>"
					Case "3"
						Response.Write "<Script Language='javascript'>alert('�����ˣ����� "&name&"��ֵ�а����Ƿ��ַ�����\n\n�벻Ҫ�ڱ��г��֣� % & * # ( ) �ȷǷ��ַ���');window.location.href='"&Err_Web&"';</Script>"
				End Select
				Response.End
			End If
		NEXT
	NEXT
end if
%>