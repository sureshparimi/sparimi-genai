
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import BlogCard from '@/components/BlogCard';
import ArticleView from '@/components/ArticleView';

const JiraCloudBlog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const blogPosts = [
    {
      title: "ScriptRunner Automation: Transform Your Jira Workflows with Advanced Groovy Scripts",
      description: "Master advanced ScriptRunner techniques to automate complex business processes, create dynamic workflows, and implement sophisticated validation rules that adapt to your organization's unique requirements.",
      author: "Suresh Parimi",
      date: "Dec 25, 2024",
      readTime: "15 min",
      tags: ["ScriptRunner", "Groovy", "Automation", "Workflows"],
      content: `
        <h2>🎯 The Strategic Impact of ScriptRunner Mastery</h2>
        <p>Organizations leveraging advanced ScriptRunner automation achieve 80% reduction in manual administrative tasks while improving workflow compliance by 95%. This isn't just about scripts—it's about transforming business processes.</p>
        
        <h3>🏗️ Advanced Groovy Patterns for Enterprise Workflows</h3>
        
        <h4>1. Dynamic Field Validation with Business Rule Engine</h4>
        <pre><code class="language-groovy">
import com.atlassian.jira.component.ComponentAccessor
import com.atlassian.jira.issue.fields.CustomField

// Advanced business rule validation
class BusinessRuleValidator {
    
    def validateFinancialApproval(issue, user) {
        def customFieldManager = ComponentAccessor.getCustomFieldManager()
        def amountField = customFieldManager.getCustomFieldObjectByName("Financial Amount")
        def amount = issue.getCustomFieldValue(amountField) as Double
        
        // Dynamic approval hierarchy based on amount
        def approvalHierarchy = [
            [max: 1000, role: "team-leads"],
            [max: 10000, role: "managers"], 
            [max: 100000, role: "directors"],
            [max: Double.MAX_VALUE, role: "executives"]
        ]
        
        def requiredRole = approvalHierarchy.find { amount <= it.max }?.role
        
        if (!userHasRole(user, requiredRole)) {
            throw new Exception("Approval required from ${requiredRole} for amount ${amount}")
        }
        
        return true
    }
    
    def userHasRole(user, role) {
        def groupManager = ComponentAccessor.getGroupManager()
        return groupManager.isUserInGroup(user, role)
    }
}

// Usage in workflow validator
def validator = new BusinessRuleValidator()
validator.validateFinancialApproval(issue, currentUser)
        </code></pre>
        
        <h4>2. Intelligent Auto-Assignment Engine</h4>
        <pre><code class="language-groovy">
import com.atlassian.jira.component.ComponentAccessor
import com.atlassian.jira.user.ApplicationUser

class IntelligentAssignmentEngine {
    
    def assignBasedOnWorkload(issue) {
        def projectRoleManager = ComponentAccessor.getProjectRoleManager()
        def searchService = ComponentAccessor.getIssueSearchService()
        
        // Get all developers in project
        def developers = getDevelopersInProject(issue.projectObject)
        
        // Calculate current workload for each developer
        def workloadMap = developers.collectEntries { developer ->
            def currentIssues = getCurrentAssignedIssues(developer)
            def storyPoints = calculateTotalStoryPoints(currentIssues)
            [developer, storyPoints]
        }
        
        // Find developer with minimum workload
        def assignee = workloadMap.min { it.value }.key
        
        // Auto-assign with notification
        issue.setAssignee(assignee)
        sendAssignmentNotification(assignee, issue)
        
        return assignee
    }
    
    def getDevelopersInProject(project) {
        def projectRoleManager = ComponentAccessor.getProjectRoleManager()
        def developerRole = projectRoleManager.getProjectRole("Developers")
        return projectRoleManager.getProjectRoleActors(developerRole, project)
                              .applicationUsers.toList()
    }
    
    def calculateTotalStoryPoints(issues) {
        def customFieldManager = ComponentAccessor.getCustomFieldManager()
        def storyPointsField = customFieldManager.getCustomFieldObjectByName("Story Points")
        
        return issues.sum { issue ->
            issue.getCustomFieldValue(storyPointsField) as Double ?: 0
        }
    }
}
        </code></pre>
        
        <h3>💼 Production Business Use Cases</h3>
        
        <h4>Use Case 1: Dynamic SLA Management</h4>
        <p><strong>Business Context:</strong> Service desk handling 10,000+ tickets monthly needs automated SLA escalation based on customer tier and issue severity.</p>
        <p><strong>Implementation:</strong> ScriptRunner automatically adjusts SLA timers, escalates to appropriate teams, and sends proactive notifications before SLA breaches.</p>
        <p><strong>ROI Impact:</strong> 95% SLA compliance achievement, 60% reduction in escalation time.</p>
        
        <h4>Use Case 2: Automated Compliance Reporting</h4>
        <p><strong>Business Context:</strong> Financial services firm requires real-time compliance reporting for audit trails and regulatory submissions.</p>
        <p><strong>Implementation:</strong> Custom scripts generate automated compliance reports, track approval workflows, and maintain audit logs with digital signatures.</p>
        <p><strong>ROI Impact:</strong> 100% audit compliance, 75% reduction in manual reporting effort.</p>
        
        <h4>Use Case 3: Intelligent Resource Allocation</h4>
        <p><strong>Business Context:</strong> IT services company managing 200+ concurrent projects needs optimal resource allocation across teams.</p>
        <p><strong>Implementation:</strong> ScriptRunner analyzes team capacity, skill sets, and project requirements to automatically assign resources and balance workloads.</p>
        <p><strong>ROI Impact:</strong> 40% improvement in resource utilization, 30% faster project delivery.</p>
        
        <h4>Use Case 4: Multi-System Integration Hub</h4>
        <p><strong>Business Context:</strong> Enterprise with 15+ integrated systems needs seamless data synchronization and workflow orchestration.</p>
        <p><strong>Implementation:</strong> Advanced Groovy scripts create integration hub that synchronizes data, triggers external workflows, and maintains data consistency across systems.</p>
        <p><Strong>ROI Impact:</strong> 85% reduction in data inconsistency issues, 90% automation of manual sync processes.</p>
        
        <h4>Use Case 5: Predictive Workflow Optimization</h4>
        <p><strong>Business Context:</strong> Agile organization needs predictive insights for sprint planning and capacity management.</p>
        <p><strong>Implementation:</strong> ScriptRunner analyzes historical data, predicts completion times, and automatically adjusts sprint planning based on team velocity and complexity patterns.</p>
        <p><strong>ROI Impact:</strong> 25% improvement in sprint predictability, 35% better capacity planning accuracy.</p>
        
        <h3>🔧 Advanced ScriptRunner Patterns</h3>
        
        <h4>Event-Driven Architecture with Listeners</h4>
        <pre><code class="language-groovy">
import com.atlassian.jira.event.issue.IssueEvent
import com.atlassian.jira.event.type.EventType
import com.atlassian.event.api.EventListener
import com.atlassian.event.api.EventPublisher

@EventListener
class AdvancedIssueListener {
    
    def eventPublisher
    
    @EventListener
    def onIssueUpdated(IssueEvent issueEvent) {
        if (issueEvent.eventTypeId == EventType.ISSUE_UPDATED_ID) {
            
            // Intelligent change detection
            def changeItems = issueEvent.changeLog.changeItems
            def significantChanges = changeItems.findAll { change ->
                isSignificantChange(change.field, change.oldstring, change.newstring)
            }
            
            if (significantChanges) {
                triggerDownstreamProcesses(issueEvent.issue, significantChanges)
                updateMetrics(issueEvent.issue, significantChanges)
                notifyStakeholders(issueEvent.issue, significantChanges)
            }
        }
    }
    
    def isSignificantChange(field, oldValue, newValue) {
        def significantFields = ["status", "priority", "assignee", "resolution"]
        return significantFields.contains(field.toLowerCase())
    }
    
    def triggerDownstreamProcesses(issue, changes) {
        // Trigger external system updates
        changes.each { change ->
            switch(change.field) {
                case "status":
                    updateExternalTrackingSystem(issue, change.newstring)
                    break
                case "assignee":
                    notifyResourceManagementSystem(issue, change.newstring)
                    break
            }
        }
    }
}
        </code></pre>
        
        <h3>📊 Performance Optimization Techniques</h3>
        
        <h4>Efficient JQL and Database Operations</h4>
        <pre><code class="language-groovy">
import com.atlassian.jira.component.ComponentAccessor
import com.atlassian.jira.jql.parser.JqlQueryParser
import com.atlassian.query.Query

class OptimizedDataProcessor {
    
    def processLargeDataSets() {
        def searchService = ComponentAccessor.getIssueSearchService()
        def jqlQueryParser = ComponentAccessor.getComponent(JqlQueryParser)
        
        // Batch processing for large datasets
        def batchSize = 1000
        def startAt = 0
        def totalProcessed = 0
        
        while (true) {
            def jqlQuery = "project = MYPROJECT ORDER BY created ASC"
            def query = jqlQueryParser.parseQuery(jqlQuery)
            
            def searchResults = searchService.search(
                ComponentAccessor.jiraAuthenticationContext.loggedInUser,
                query,
                com.atlassian.jira.web.bean.PagerFilter.getUnlimitedFilter()
                    .setStart(startAt)
                    .setMax(batchSize)
            )
            
            if (searchResults.issues.empty) break
            
            // Process batch efficiently
            searchResults.issues.each { issue ->
                processIssueOptimized(issue)
            }
            
            totalProcessed += searchResults.issues.size()
            startAt += batchSize
            
            // Memory management
            if (totalProcessed % 5000 == 0) {
                System.gc() // Suggest garbage collection
            }
        }
        
        return totalProcessed
    }
    
    def processIssueOptimized(issue) {
        // Minimize database calls by caching frequently accessed data
        def cachedData = getCachedProjectData(issue.projectObject.key)
        
        // Batch field updates
        def fieldUpdates = prepareFieldUpdates(issue, cachedData)
        executeFieldUpdates(issue, fieldUpdates)
    }
}
        </code></pre>
        
        <h3>🚀 Integration with External Systems</h3>
        
        <h4>REST API Integration Patterns</h4>
        <pre><code class="language-groovy">
@Grab('org.codehaus.groovy.modules.http-builder:http-builder:0.7.1')
import groovyx.net.http.RESTClient
import static groovyx.net.http.ContentType.*

class ExternalSystemIntegrator {
    
    def integrateWithCRM(issue) {
        def crmClient = new RESTClient('https://api.crm-system.com/')
        crmClient.headers['Authorization'] = "Bearer ${getCRMToken()}"
        
        try {
            // Create or update customer record
            def customerData = extractCustomerData(issue)
            def response = crmClient.post(
                path: '/customers',
                body: customerData,
                requestContentType: JSON
            )
            
            if (response.status == 201) {
                // Update Jira with CRM reference
                updateIssueWithCRMReference(issue, response.data.id)
                logIntegrationSuccess(issue, "CRM", response.data.id)
            }
            
        } catch (Exception e) {
            logIntegrationError(issue, "CRM", e.message)
            // Implement retry mechanism
            scheduleRetry(issue, "CRM", 3)
        }
    }
    
    def scheduleRetry(issue, system, maxRetries) {
        // Implement exponential backoff retry logic
        def retryCount = getRetryCount(issue, system)
        if (retryCount < maxRetries) {
            def delay = Math.pow(2, retryCount) * 1000 // Exponential backoff
            scheduleDelayedExecution(delay) {
                retryIntegration(issue, system, retryCount + 1)
            }
        }
    }
}
        </code></pre>
        
        <h3>📈 Monitoring and Analytics</h3>
        
        <h4>Performance Metrics Dashboard</h4>
        <pre><code class="language-groovy">
class ScriptRunnerMetrics {
    
    def generatePerformanceReport() {
        def metrics = [
            executionTimes: getScriptExecutionTimes(),
            errorRates: getScriptErrorRates(),
            resourceUsage: getResourceUsageMetrics(),
            businessImpact: getBusinessImpactMetrics()
        ]
        
        // Generate automated report
        def report = createHTMLReport(metrics)
        sendReportToStakeholders(report)
        
        return metrics
    }
    
    def getBusinessImpactMetrics() {
        return [
            automatedProcesses: countAutomatedProcesses(),
            timeSaved: calculateTimeSavings(),
            errorReduction: calculateErrorReduction(),
            complianceScore: calculateComplianceScore()
        ]
    }
    
    def calculateTimeSavings() {
        // Calculate time saved through automation
        def manualProcessTime = getManualProcessBaseline()
        def automatedProcessTime = getAutomatedProcessTime()
        return manualProcessTime - automatedProcessTime
    }
}
        </code></pre>
        
        <p>ScriptRunner mastery transforms organizations from reactive administration to proactive, intelligent workflow orchestration. The teams implementing these patterns achieve operational excellence that becomes their competitive advantage.</p>
      `,
      punchline: "What if your Jira could think and act like your most experienced project manager, 24/7?"
    },
    {
      title: "Jira Cloud REST API Mastery: Building Enterprise-Grade Integrations",
      description: "Deep dive into Jira Cloud REST API architecture, authentication strategies, rate limiting, and building robust integrations that scale with enterprise demands while maintaining optimal performance.",
      author: "Suresh Parimi",
      date: "Dec 23, 2024",
      readTime: "18 min",
      tags: ["REST API", "Integration", "Enterprise", "Scalability"],
      content: "...",
      punchline: "The difference between a good admin and a great one? APIs that work flawlessly under pressure."
    },
    {
      title: "ChatGPT-Powered Jira Analytics: AI-Driven Project Insights and Predictive Dashboards",
      description: "Leverage ChatGPT and OpenAI APIs to create intelligent dashboards that provide predictive analytics, automated reporting, and natural language querying for Jira data visualization.",
      author: "Suresh Parimi",
      date: "Dec 21, 2024",
      readTime: "12 min",
      tags: ["ChatGPT", "Analytics", "AI Dashboards", "Predictive Analytics"],
      content: "...",
      punchline: "When your dashboard starts predicting project risks before your PM does, you know you've leveled up."
    },
    {
      title: "Advanced Permission Schemes: Zero-Trust Security Architecture in Jira Cloud",
      description: "Implement sophisticated permission models using advanced schemes, security levels, and custom field permissions to create a zero-trust security architecture that scales across global enterprises.",
      author: "Suresh Parimi",
      date: "Dec 20, 2024",
      readTime: "14 min",
      tags: ["Security", "Permissions", "Zero-Trust", "Enterprise"],
      content: "...",
      punchline: "Security isn't just about who can't see what – it's about ensuring the right people have exactly the right access at exactly the right time."
    },
    {
      title: "AI-Enhanced Issue Classification: Machine Learning for Automatic Triaging",
      description: "Build intelligent issue classification systems using machine learning algorithms that automatically categorize, prioritize, and route issues based on content analysis and historical patterns.",
      author: "Suresh Parimi",
      date: "Dec 18, 2024",
      readTime: "16 min",
      tags: ["Machine Learning", "Issue Classification", "Automation", "AI"],
      content: "...",
      punchline: "What if every issue that hit your backlog was pre-sorted, pre-prioritized, and pre-assigned before a human even looked at it?"
    },
    {
      title: "Custom Field Architecture: Building Scalable Data Models for Complex Organizations",
      description: "Design and implement sophisticated custom field architectures that support complex organizational structures while maintaining performance, usability, and data integrity across thousands of projects.",
      author: "Suresh Parimi",
      date: "Dec 16, 2024",
      readTime: "13 min",
      tags: ["Custom Fields", "Data Architecture", "Scalability", "Performance"],
      content: "...",
      punchline: "The art of Jira administration isn't in having every field possible – it's in having exactly the right fields that scale infinitely."
    },
    {
      title: "Advanced JQL Mastery: Query Optimization and Performance Tuning",
      description: "Master advanced JQL techniques, query optimization strategies, and performance tuning methods to handle complex searches across millions of issues without compromising system performance.",
      author: "Suresh Parimi",
      date: "Dec 14, 2024",
      readTime: "11 min",
      tags: ["JQL", "Performance", "Query Optimization", "Search"],
      content: "...",
      punchline: "A slow JQL query is like a traffic jam in your brain – everything stops until it's fixed."
    },
    {
      title: "Atlassian Marketplace Strategy: Building and Managing Enterprise Add-on Ecosystems",
      description: "Strategic approach to evaluating, implementing, and managing Atlassian Marketplace add-ons in enterprise environments with focus on security, compliance, and long-term maintainability.",
      author: "Suresh Parimi",
      date: "Dec 12, 2024",
      readTime: "10 min",
      tags: ["Marketplace", "Add-ons", "Enterprise Strategy", "Compliance"],
      content: "...",
      punchline: "The best add-on is the one you don't need because you've architected your Jira so well."
    },
    {
      title: "Multi-Project Portfolio Management: Advanced Configuration Strategies",
      description: "Architect complex multi-project portfolios with sophisticated linking strategies, cross-project dependencies, and automated reporting that provides executive-level visibility across the entire organization.",
      author: "Suresh Parimi",
      date: "Dec 10, 2024",
      readTime: "17 min",
      tags: ["Portfolio Management", "Multi-Project", "Executive Reporting", "Dependencies"],
      content: "...",
      punchline: "Managing one project in Jira is administration. Managing 100+ interconnected projects? That's orchestration."
    },
    {
      title: "Disaster Recovery and Business Continuity: Advanced Backup and Migration Strategies",
      description: "Implement comprehensive disaster recovery solutions with automated backups, cross-cloud migrations, and business continuity planning that ensures zero data loss and minimal downtime scenarios.",
      author: "Suresh Parimi",
      date: "Dec 8, 2024",
      readTime: "19 min",
      tags: ["Disaster Recovery", "Backup", "Migration", "Business Continuity"],
      content: "...",
      punchline: "Hope is not a backup strategy, and neither is crossing your fingers when the server room floods."
    }
  ];

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, blogPosts.length));
  };

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        <div className="container mx-auto">
          <ArticleView
            {...selectedArticle}
            onBack={() => setSelectedArticle(null)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-orange-300 hover:text-white transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
              Jira Cloud Administration
            </h1>
            <p className="text-orange-300 text-lg max-w-2xl mx-auto">
              Advanced Jira administration techniques, ScriptRunner automation, API integrations, and AI-powered solutions for enterprise-level project management.
            </p>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {blogPosts.slice(0, visiblePosts).map((post, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogCard 
                  {...post} 
                  onClick={() => setSelectedArticle(post)}
                />
              </div>
            ))}
          </div>
          
          {visiblePosts < blogPosts.length && (
            <div className="text-center mb-8">
              <button
                onClick={loadMore}
                className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              >
                Load More Articles
              </button>
            </div>
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default JiraCloudBlog;
